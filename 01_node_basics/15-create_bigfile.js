const fs = require("fs");

for (let i = 1; i <= 100000; i++) {
  fs.writeFileSync("./content/big.txt", `Hello World ${i}\n`, { flag: "a" });
}
