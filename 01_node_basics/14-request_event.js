// Using  Event Emitter API

const http = require("http");

const server = http.createServer();

server.on("response", (req, res) => {
  if (req.url === "/") {
    res.end("welcome");
  }
});
