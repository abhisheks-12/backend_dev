// require("./5-mind_grenade");

// why absolute vs realtive

const path = require("path");

console.log(path.sep);

const filepath = path.join("/content", "subfolder", "text.txt");

const base = path.basename(filepath);
console.log(base);

// return absolute path
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");


