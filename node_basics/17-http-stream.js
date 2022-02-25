const http = require("http");
const fs = require("fs");

/*
// this will send whole file in single time
const server = http.createServer((req, res) => {
  const text = fs.readFileSync("./content/big.txt", "utf8");
  res.end(text);
});
server.listen(5001);
*/

// stream will send data in chunks
const server = http.createServer((req, res) => {
  const readStream = fs.createReadStream("./content/big.txt");
  readStream.on("data", (response) => {
    res.end(response);
  });
  readStream.on("error", (err) => {
    console.error(err);
  });
});

server.listen(5001);
