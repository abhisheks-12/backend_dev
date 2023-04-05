const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token =
    req.headers.authorization.replace("Bearer", "").trim("") ||
    req.body.token ||
    req.cookies.token;

  console.log(token);

  if (!token) {
    return res.json({
      msg: "please provide token",
    });
  }

  try {
    const compareToken = jwt.verify(token, process.env.key);
    console.log(compareToken);
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
  // console.log('comaredToken ------------------------ '+compareToken);

  return next();
};

module.exports = auth;
