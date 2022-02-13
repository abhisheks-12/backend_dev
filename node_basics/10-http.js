const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(`<h1> Welcome To our server</h1>`);
  } else if (req.url === "/about") {
    res.end(`
    <h1> History  </h1>
    <p> Hello we are top leading company</p>
    `);
  } else {
    res.end(`<a href="/"> Page not found go back to home</a>`);
  }
});

server.listen(2001);
