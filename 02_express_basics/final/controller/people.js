const { people } = require("../data");

const getPeoples = (req, res) => {
  res.status(200).json({ success: "true", data: people });
};

const createPeoples = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: "false", data: "please provide name value" });
  }
  res.status(201).json({ success: "true", data: `value of name is ${name}` });
};

const createPeoplesPostman = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: "false", data: "Name not found" });
  }
  return res.status(201).send({ success: "true", data: [...people, { name }] });
};

const updatePeople = (req, res) => {
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
};

const deletePeople = (req, res) => {
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
};

module.exports = {
  getPeoples,
  createPeoples,
  createPeoplesPostman,
  updatePeople,
  deletePeople,
};
