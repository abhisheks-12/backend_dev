const express = require("express");
const app = express();
let { people } = require("./data");

// static data
app.use(express.static("./methods-public"));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

// html form login
app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(400).send(`Hello ${name}`);
  }
  return res.send("Enter Credentials");
});

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: "true", data: people });
});

//  forms javascript
app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: "false", data: "please provide name value" });
  }
  res.status(201).json({ success: "true", data: `value of name is ${name}` });
});

// postman
app.post("/api/people/postman", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: "false", data: "Name not found" });
  }
  return res.status(201).send({ success: "true", data: [...people, { name }] });
});

// PUT REQUEST
app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const singlePerson = people.find((person) => person.id === Number(id));
  if (!singlePerson) {
    return res.status(400).json({ success: "false", data: "Person not found" });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ response: "success", data: newPeople });
});

// DELETE DATA
app.delete("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const singlePerson = people.find((person) => person.id === Number(id));

  if (!singlePerson) {
    return res
      .status(400)
      .json({ response: "sucesses", data: "User Not Found" });
  }
  const newPerson = people.filter((person) => {
    if (person.id !== Number(id)) {
      return person;
    }
  });
  res.status(200).json({ response: "sucesses", data: newPerson });
});

app.listen(5000, () => {
  console.log("App is listening");
});
