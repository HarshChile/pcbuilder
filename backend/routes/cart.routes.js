const express = require("express");
const router = express.Router();
const db = require("../models");

async function getCart() {
  let cart = await db.Selected.findOne();
  if (!cart) {
    cart = await db.Selected.create({});
  }
  return cart;
}

router.get("/", async (req, res) => {
  try {
    const cart = await getCart();

    const response = {
      processor: db.Processor && cart.processorid
        ? await db.Processor.findByPk(cart.processorid)
        : null,

      motherboard: db.Motherboard && cart.motherboardid
        ? await db.Motherboard.findByPk(cart.motherboardid)
        : null,

      ram: db.Ram && cart.ramid ? await db.Ram.findByPk(cart.ramid) : null,

      graphics:
        db.Graphic && cart.graphicsid
          ? await db.Graphic.findByPk(cart.graphicsid)
          : null,

      ssd: db.Ssd && cart.ssdid ? await db.Ssd.findByPk(cart.ssdid) : null,

      casefan:
        db.Fan && cart.casefanid ? await db.Fan.findByPk(cart.casefanid) : null,

      case:
        db.Case && cart.caseid ? await db.Case.findByPk(cart.caseid) : null,

      powersupply:
        db.Psu && cart.powersupplyid
          ? await db.Psu.findByPk(cart.powersupplyid)
          : null,

      keyboard:
        db.Keyboard && cart.keyboardid
          ? await db.Keyboard.findByPk(cart.keyboardid)
          : null,

      mouse: db.Mouse && cart.mouseid ? await db.Mouse.findByPk(cart.mouseid) : null,
    };

    res.json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch cart" });
  }
});

router.post("/add", async (req, res) => {
  const { type, id } = req.body;

  try {
    const cart = await getCart();

    if (type === "motherboard" && cart.processorid) {
      const cpu = await Processor.findByPk(cart.processorid);
      const mobo = await Motherboard.findByPk(id);

      if (cpu.socket !== mobo.socket) {
        return res.status(400).json({
          message: `CPU socket ${cpu.socket} is not compatible with motherboard socket ${mobo.socket}`,
        });
      }
    }

    // Map type → column
    const columnMap = {
      processor: "processorid",
      motherboard: "motherboardid",
      ram: "ramid",
      graphics: "graphicsid",
      ssd: "ssdid",
      casefan: "casefanid",
      case: "caseid",
      powersupply: "powersupplyid",
      keyboard: "keyboardid",
      mouse: "mouseid",
    };

    const column = columnMap[type];
    if (!column) {
      return res.status(400).json({ message: "Invalid component type" });
    }

    cart[column] = id;
    await cart.save();

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to add component" });
  }
});

router.delete("/:type", async (req, res) => {
  const { type } = req.params;

  try {
    const cart = await getCart();

    const columnMap = {
      processor: "processorid",
      motherboard: "motherboardid",
      ram: "ramid",
      graphics: "graphicsid",
      ssd: "ssdid",
      case: "caseid",
      casefan: "casefanid",
      powersupply: "powersupplyid",
      keyboard: "keyboardid",
      mouse: "mouseid",
    };

    const column = columnMap[type];
    if (!column) {
      return res.status(400).json({ message: "Invalid component type" });
    }

    cart[column] = null;
    await cart.save();

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to remove component" });
  }
});

module.exports = router;
