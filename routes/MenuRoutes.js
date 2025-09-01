const express = require("express");
const router = express.Router();

const MenuItems = require("./../models/menuItems");

router.get("/", async (req, res) => {
  try {
    const menus = await MenuItems.find();
    console.log("data saved successfully");
    res.status(200).json(menus);
  } catch (error) {
    console.log("Error While getting menus data", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const data = req.body; // get data

    const newMenu = new MenuItems(data); // create person objecr
    const response = await newMenu.save(); // save person data into db
    console.log("data saved successfully");
    res.status(200).json(response);
  } catch (error) {
    console.log("Error While Saving menus data", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/:taste", async (req, res) => {
  try {
    const taste = req.params.taste;
    if (taste == "sour" || taste == "sweet" || taste == "Spicy") {
      const menus = await MenuItems.find({ taste: taste });
      console.log("data saved successfully");
      res.status(200).json(menus);
    }
  } catch (error) {
    console.log("Error While getting menus data", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
