// file sync module


const { readFileSync, writeFileSync, appendFileSync } = require("fs");

const first = readFileSync("./content/subfolder/first.txt", "utf8");
console.log(first);

const movieName = "Batman dark knight rises\n";
writeFileSync("./content/hello.txt", movieName, { flag: a });

// appending file
appendFileSync("./content/hello.txt", "Why do we fall bruce");
