const express = require("express");
const router = express.Router();
const {
  getPeoples,
  createPeoples,
  createPeoplesPostman,
  updatePeople,
  deletePeople,
} = require("../controller/people");

router.get("/", getPeoples);

//  forms javascript
router.post("/", createPeoples);

// postman
router.post("/postman", createPeoplesPostman);

// PUT REQUEST
router.put("/:id", updatePeople);

// DELETE DATA
router.delete("/:id", deletePeople);

module.exports = router;
