// fs async
const { readFile, writeFile } = require("fs");


// -------------------->>>>>>> callback hell

readFile("./content/subfolder/first.txt", "utf8", (err, resolve) => {
  if (err) {
    console.log(err);
  }
  const first = resolve;
  readFile("./content/subfolder/second.txt", "utf8", (err, resolve) => {
    if (err) {
      console.log(err);
    }
    const second = resolve;
    writeFile(
      "./content/sample.txt",
      `Hello this file created using node js async functionality \n ${first} \n ${second}`,
      (err, resolve) => {
        if (err) {
          console.log(err);
        }
        console.log("Done with task", resolve);
      }
    );
  });
});




