const express = require("express");
const cloudinary = require("cloudinary").v2;
const ejs = require("ejs");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
app.use(express.urlencoded({ extended: true }));

// ejs
app.set("view engine", "ejs");

// cloudinary config
cloudinary.config({
  cloud_name: "",
  api_key: "",
  api_secret: "",
});

app.get("/myget", (req, res) => {
  const { firstname } = req.body;

  res.status(200).json({
    data: firstname,
  });
});

app.get("/mygetform", (req, res) => {
  res.render("getform");
});

app.get("/mypostform", (req, res) => {
  res.render("postform");
});

app.get("/api/mygetform", (req, res) => {
  console.log(req.query);
});

//  start local upload
app.post("/api/mypostform", (req, res) => {
  let sampleFile;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  sampleFile = req.files.file;
  uploadPath = __dirname + "/files/" + sampleFile.name;

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(uploadPath, function (err) {
    if (err) return res.status(500).send(err);

    res.send("File uploaded!");
  });
});

// upload to cloudinary
app.post("/api/upload", async (req, res) => {
  let sampleFile;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  // filename
  sampleFile = req.files.file;

  // response
  //   .then((data) => {
  //     // console.log(data);
  //     console.log(data.secure_url);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  try {
    const response = await cloudinary.uploader.upload(sampleFile.tempFilePath, {
      folder: "temp",
      // public_id: "temp",
    });
    const data = await response;

    res.redirect(data.secure_url);
  } catch (err) {
    console.log(err);
  }
});

// handle multpile image and upload
app.post("/api/uploadMultiple", async (req, res) => {
  let sampleFile;
  const multipleImages = [];

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  // filename
  sampleFile = req.files.file;

  for (let i = 0; i < sampleFile.length; i++) {
    console.log(sampleFile[i].tempFilePath);
    try {
      const response = await cloudinary.uploader.upload(
        sampleFile[i].tempFilePath,
        {
          folder: "temp",
          // public_id: "temp",
        }
      );
      const data = await response;
      multipleImages.push({
        url: data.secure_url,
      });
    } catch (err) {
      console.log(err);
    }
  }

  return res.json({
    imgurls: multipleImages,
  });
});

app.listen(5000, () => {
  console.log("App is listening on port 5000");
});
