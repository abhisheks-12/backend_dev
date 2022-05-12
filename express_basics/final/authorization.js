// const authorization = (req, res, next) => {
//   const { user } = req.query;
//   if (user === "bruce") {
//     req.user = {
//       name: "bruce",
//       id: 3,
//     };
//     next();
//   } else {
//     res.status(401).send("<p>Unauthorized</p>");

//   }
//   // console.log("authorized");
//   // next();
// };

// module.exports = authorization;

const authorize = (req, res, next) => {
  // console.log("hello world");
  const { user, pass } = req.query;
  console.log(user, pass);
  next();
};

module.exports = authorize;
