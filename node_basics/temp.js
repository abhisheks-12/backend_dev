const axios = require("axios");

const getData = async () => {
  try {
    const data = await axios.get("https://jsonplaceholder.typicode.com/todos/100");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const temp = async () => {
  console.log("first");
  await getData();
  console.log("second");
};

temp();