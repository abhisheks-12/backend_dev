// event driven programming
// used heavly in node js

const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log("data recived " + name + " " + "and id is " +id);
});

customEmitter.on("response", () => {
  console.log("some other logic here");
});

customEmitter.emit("response", "jhon", 34);
