const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const port = 5000;
// middlewares

app.use(express.static("./public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/v1/tasks", tasks);

app.listen(port, () => {
  console.log("App is listening on port " + port);
});
