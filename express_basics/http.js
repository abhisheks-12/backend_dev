// Raw http connection without using express

const fs = require("fs");
const homePage = fs.readFileSync("../index.html", "utf8");

const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  //home page
  if (url === "/") {
    // console.log(req.method);
    res.writeHead(200, { "Content-Type": "text/html" });
    // res.write("<h1>Hello World</h1>");      // here adding html using readfile

    res.write(homePage);
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Our History</h1>");
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>Page not found</h1>");
    res.end();
  }
});

server.listen(5002);
