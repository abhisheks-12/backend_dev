

/////////////////////////////////////////     By using util.promisify ////////////////////////

// const { readFile, writeFile } = require("fs");
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

////////////////////////////////// by using .promise method
const { readFile, writeFile } = require("fs").promises;

const start = async () => {
  try {
    // const first = readFilePromise("./content/subfolder/first.txt", "utf8");  ----->>>>> this is using util.promisify(readFile)
    // const second = readFilePromise("./content/subfolder/second.txt", "utf8");

    const first = readFile("./content/subfolder/first.txt", "utf8");
    const second = readFile("./content/subfolder/second.txt", "utf8");

    console.log(second);

    writeFilePromise(
      "./content/promisify.txt",
      `${first} this file is created using promisify`
    );
  } catch (err) {
    console.log(err);
  }
};

start();
