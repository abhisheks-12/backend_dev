const mongoose = require("mongoose");

// const connectionString =
//   "mongodb+srv://abhisheks-12:noobmongo@nodeexpress.7r9u8xx.mongodb.net/Task-Manager-API?retryWrites=true&w=majority";

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
};

module.exports = connectDB;
