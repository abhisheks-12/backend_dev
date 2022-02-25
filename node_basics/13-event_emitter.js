// Events in Node js
// event driven programming
// used heavly in node js

const events = require("events");

const customEvents = new events.EventEmitter();

customEvents.on("response", () => {
  console.log("data recived");
});

customEvents.on("response", (name, id) => {
  console.log(`name is ${name} and id is ${id}`);
});

customEvents.on("response", () => {
  console.log("some other logic");
});

customEvents.emit("response","lufi",1);

