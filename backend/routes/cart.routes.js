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
      processor:
        db.Processor && cart.processorid
          ? await db.Processor.findByPk(cart.processorid)
          : null,

      motherboard:
        db.Motherboard && cart.motherboardid
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

      case: db.Case && cart.caseid ? await db.Case.findByPk(cart.caseid) : null,

      powersupply:
        db.Psu && cart.powersupplyid
          ? await db.Psu.findByPk(cart.powersupplyid)
          : null,
      keyboard:
        db.Keyboard && cart.keyboardid
          ? await db.Keyboard.findByPk(cart.keyboardid)
          : null,

      mouse:
        db.Mouse && cart.mouseid ? await db.Mouse.findByPk(cart.mouseid) : null,
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
    //Compatiblity for processor and motherboard
    if (type === "motherboard" && cart.processorid) {
      const cpu = await db.Processor.findByPk(cart.processorid);
      const mobo = await db.Motherboard.findByPk(id);

      if (cpu.socket !== mobo.socket) {
        return res.status(400).json({
          message: `CPU socket (${cpu.socket}) is not compatible with motherboard socket (${mobo.socket})`,
        });
      }
    }
    if (type === "processor" && cart.motherboardid) {
      const cpu = await db.Processor.findByPk(id);
      const mobo = await db.Motherboard.findByPk(cart.motherboardid);

      if (cpu.socket !== mobo.socket) {
        return res.status(400).json({
          message: `Processor socket (${cpu.socket}) does not match motherboard socket (${mobo.socket})`,
        });
      }
    }

    //Compatibility for RAM and Motherboard
    if (type === "ram" && cart.motherboardid) {
      const ram = await db.Ram.findByPk(id);
      const mobo = await db.Motherboard.findByPk(cart.motherboardid);

      if (ram.ramtype !== mobo.ramsocket) {
        return res.status(400).json({
          message: `RAM type ${ram.ramtype} is not supported by motherboard (${mobo.ramsocket})`,
        });
      }
    }
    if (type === "motherboard" && cart.ramid) {
      const mobo = await db.Motherboard.findByPk(id);
      const ram = await db.Ram.findByPk(cart.ramid);

      if (ram.ramtype !== mobo.ramsocket) {
        return res.status(400).json({
          message: `Motherboard RAM Type (${mobo.ramsocket}) is not compatible with selected RAM (${ram.ramtype})`,
        });
      }
    }

    //Voltage compatibility for Power Supply
    if (type === "powersupply") {
      const psu = await db.Psu.findByPk(id);

      let totalTdp = 0;

      if (cart.processorid) {
        const cpu = await db.Processor.findByPk(cart.processorid);
        totalTdp += cpu.tdp;
      }

      if (cart.graphicsid) {
        const gpu = await db.Graphic.findByPk(cart.graphicsid);
        totalTdp += gpu.tdp;
      }

      const recommended = totalTdp * 1.5; // headroom

      if (psu.voltage < recommended) {
        return res.status(400).json({
          message: `PSU ${
            psu.voltage
          }W is insufficient. Recommended ≥ ${Math.ceil(recommended)}W`,
        });
      }
    }

    //Compatibility check for Mother board and Case form factor
    const caseSupportMap = {
      ATX: ["ATX", "mATX", "ITX"],
      mATX: ["mATX", "ITX"],
      ITX: ["ITX"],
    };
    if (type === "case" && cart.motherboardid) {
      const pcCase = await db.Case.findByPk(id);
      const mobo = await db.Motherboard.findByPk(cart.motherboardid);

      const supportedMobos = caseSupportMap[pcCase.formfactor];

      if (!supportedMobos.includes(mobo.formfactor)) {
        return res.status(400).json({
          message: `Case (${pcCase.formfactor}) does not support motherboard form factor (${mobo.formfactor})`,
        });
      }
    }
    if (type === "motherboard" && cart.caseid) {
      const mobo = await db.Motherboard.findByPk(id);
      const pcCase = await db.Case.findByPk(cart.caseid);

      const supportedMobos = caseSupportMap[pcCase.formfactor];

      if (!supportedMobos.includes(mobo.formfactor)) {
        return res.status(400).json({
          message: `Motherboard (${mobo.formfactor}) is not compatible with case (${pcCase.formfactor})`,
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
