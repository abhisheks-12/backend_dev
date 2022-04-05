<<<<<<< HEAD
=======
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Hello World</h1>");
    res.end();
  }
});

server.listen(5001);
>>>>>>> 990a7db155108c5bc7c47005f62c1acc6175367b
