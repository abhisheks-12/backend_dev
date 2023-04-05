const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.db_url)
    .then(() => {
      console.log("connected to db......");
    })

    .catch((err) => {
      console.log(err);
    });
};

connectToDb();

module.exports = connectToDb;
