const express = require("express");
const router = express.Router();

const Person = require("./../models/person");

router.post("/", async (req, res) => {
  try {
    const data = req.body; // get data

    const newPerson = new Person(data); // create person objecr

    const response = await newPerson.save(); // save person data into db
    console.log("data saved successfully");
    res.status(200).json(response);
  } catch (error) {
    console.log("Error While Saving Persons data");
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data saved successfully");
    res.status(200).json(data);
  } catch (error) {
    console.log("Error While Saving Persons data");
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    if (workType == "chef" || workType == "waiter" || workType == "manager") {
      const response = await Person.find({ work: workType });
      res.status(200).send(response);
    } else {
      res.status(404).send("Invalid request");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const personID = req.params.id;
    const updateValue = req.body;

    const response = await Person.findByIdAndUpdate(personID, updateValue);
    if (!response) {
      res.status(404).send("person not found");
    }
    res.status(200).send(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const personID = req.params.id;
    const response = await Person.findByIdAndDelete(personID);
    if (!response) {
      res.status(404).send("person not found");
    }
    res.status(200).send({ message: "Person Deleted Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
