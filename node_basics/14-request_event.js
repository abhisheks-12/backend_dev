// Using  Event Emitter API


const http = require("http");

const server = http.createServer();
// emits request event 
// response to event
server.on("request", (req, res) => {
  res.end("welcome");
});

server.listen(5000);
