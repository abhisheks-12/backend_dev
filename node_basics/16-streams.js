// STREAMS

// Writeable
// Readable
// Duplex
// Transform

const fs = require("fs");
const readStream = fs.createReadStream("./content/big.txt");

// Here we are reading data in chunks
// we can see those chunks  without encoding data
// readStream.setEncoding("utf8");

readStream.on("data", (response) => {
  console.log(response);
});

readStream.on("error", (err) => {
  console.error(err);
});
