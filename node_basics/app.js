/*
////////////////////////////////////           for  refernce promises behind the scence

const { readFile } = require("fs");

const getText = function (path) {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};


// by then method
getText("./content/subfolder/first.txt")
  .then((response) => console.log(response))
  .catch((err) => console.log(err));

//  by using aysnc await
const start = async () => {
  try {
    const first = await getText("./content/subfolder/first.txt");
    const second = await getText("./content/subfolder/second.txt");
  } catch (err) {
    console.log(err);
  }
};

start();

*/

/////////////////////////////////////////           By using util.promisify

const { readFile, writeFile } = require("fs");
const util = require("util");

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = readFilePromise("./content/subfolder/first.txt", "utf8");
    const second = readFilePromise("./content/subfolder/second.txt", "utf8");
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
