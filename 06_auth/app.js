const express = require("express");
require("dotenv").config();
require("./config/database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const User = require("./model/user-model");
const auth = require("./controller/auth");

const app = express();
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.status(200).json({
    msg: "Welcome to auth-system",
  });
});

app.post("/register", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!(firstName && lastName && email && password)) {
    return res.status(400).json({
      msg: "please fill required fields",
    });
  }

  const doesUserExist = await User.findOne({ email });

  if (doesUserExist) {
    return res.status(409).json({
      msg: "User already exist",
    });
  }

  const encryptedPass = await bcrypt.hash(password, 10);

  const user = await User.create({
    firstName,
    lastName,
    email,
    password: encryptedPass,
  });
  const response = await user.save();

  response.password = undefined;

  return res.status(201).json({
    msg: "user created",
    res: response,
  });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!(email && password)) {
    return res.status(400).json({
      msg: "please fill all details ",
    });
  }

  const doesUserExist = await User.findOne({ email });

  if (!doesUserExist) {
    return res.status(400).json({
      msg: "User doesn't exist please register ",
    });
  }

  const comparePassword = await bcrypt.compare(
    password,
    doesUserExist.password
  );

  if (doesUserExist && comparePassword) {
    // return token
    const token = jwt.sign(
      {
        userid: doesUserExist._id,
        email: doesUserExist.email,
      },
      process.env.key,
      { expiresIn: "1h" }
    );

    const cookiesOption = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };

    return res.status(200).cookie("jwt token", token, cookiesOption).json({
      sucess: true,
    });

    // return res.status(200).json({
    //   response: true,
    //   toekn: token,
    //   email: doesUserExist.email,
    // });
  } else {
    return res.status(200).json({
      msg: "please check password",
    });
  }
});

app.get("/users", auth, (req, res) => {
  res.status(200).json({
    msg: "get all users",
  });
});

app.post("/logout", (req, res) => {
  res.clearCookie("jwt token").send("cookie cleared");
});

module.exports = app;
