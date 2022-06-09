const authorization = (req, res, next) => {
  const { user } = req.query;
  if (user === "bruce") {
    req.user = { name: "bruce", id: 1 };
  } else {
    res.send("<h1>Unauthorized</h1>");
  }
  next();
};

module.exports = authorization;
