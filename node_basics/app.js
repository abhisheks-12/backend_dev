const http = require("http");
const { readFileSync, read } = require("fs");

const server = http.createServer((req, res) => {
  const text = readFileSync("./content/subfolder/big.txt", "utf8");
  res.end(text);
});

server.listen(5001);
