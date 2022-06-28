const getUsers = (req, res) => {
  res.send("Get Users");
};

const getSingleUser = (req, res) => {
  res.send("Get Single Users");
};

const createUser = (req, res) => {
  res.send("User Created");
};

const updateUser = (req, res) => {
  res.send("Updated User");
};

const deleteUser = (req, res) => {
  res.send("User Deleted");
};

module.exports = {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
};
