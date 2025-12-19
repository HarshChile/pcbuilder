const express = require("express");
const router = express.Router();
const db = require("../models");   

const modelMap = {
  processor: db.Processor,
  graphics: db.Graphic,
  ram: db.Ram,
  motherboard: db.Motherboard,
  powersupply: db.Psu,
  casefan: db.Fan,
  case: db.Case
};

router.get("/:type", async (req, res) => {
  const { type } = req.params;
  const Model = modelMap[type];

  if (!Model) {
    return res.status(404).json({ message: "Invalid component type" });
  }

  try {
    const items = await Model.findAll();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/:type/details/:id", async (req, res) => {
  const { type, id } = req.params;
  const Model = modelMap[type];

  if (!Model) {
    return res.status(404).json({ message: "Invalid component type" });
  }

  try {
    const item = await Model.findByPk(id);
    if (!item) {
      return res.status(404).json({ message: "Component not found" });
    }
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
