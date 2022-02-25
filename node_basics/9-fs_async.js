// fs async
const { readFile, writeFile } = require("fs");

// -------------------->>>>>>> callback hell

readFile("./content/subfolder/first.txt", "utf8", (err, resolve) => {
  if (err) {
    console.log(err);
  }
  const first = resolve;
  readFile("./content/subfolder/second.txt", "utf8", (err, resolve) => {
    if (err) {
      console.log(err);
    }
    const second = resolve;
    writeFile(
      "./content/sample.txt",
      `Hello this file created using node js async functionality \n ${first} \n ${second}`,
      (err, resolve) => {
        if (err) {
          console.log(err);
        }
        console.log("Done with task", resolve);
      }
    );
  });
});

// reading and writing using promise
////////////////////////////////////         for  refernce promises behind the scence

const { readFile } = require("fs");

const getText = function (path) {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

// by then method
getText("./content/subfolder/first.txt")
  .then((response) => console.log(response))
  .catch((err) => console.log(err));

//  by using aysnc await
const start = async () => {
  try {
    const first = await getText("./content/subfolder/first.txt");
    const second = await getText("./content/subfolder/second.txt");
  } catch (err) {
    console.log(err);
  }
};

start();
