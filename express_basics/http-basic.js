/*
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
    // res.write("<h1>Hello World</h1>");      
    res.write(homePage); // here adding html using readfile
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
*/


// using http module to
//  send request server side rendering

const http = require("http");
const fs = require("fs");
const homePage = fs.readFileSync("./navbar_app/index.html");
const homeStyles = fs.readFileSync("./navbar_app/style.css");
const homeImage = fs.readFileSync("./navbar_app/logo.jpeg");
const homeLogic = fs.readFileSync("./navbar_app/browser_app.js");

const server = http.createServer((req, res) => {
  // home
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(homePage);
    res.end();

    // style
  } else if (req.url === "/style.css") {
    res.writeHead(200, { "Content-Type": "text/css" });
    res.write(homeStyles);
    res.end();

    // image
  } else if (req.url === "./logo.jpeg") {
    res.writeHead(200, { "Content-Type": "image/jpeg" });
    res.write(homeImage);
    res.end();
  }
  // script
  else if (req.url === "./browser_app.js") {
    res.writeHead(200, { "Content-Type": "application/javascript" });
    res.write(homeLogic);
    res.end();
  }

  // 404
  else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>Page Not Found</h1>");
    res.end();
  }
});

server.listen(5001);
