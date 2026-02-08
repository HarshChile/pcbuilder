const express = require("express");
const router = express.Router();
const db = require("../models");

async function getCart(cartid) {
  let cart = await db.Selected.findOne({ where: { id: cartid } });
  if (!cart) {
    cart = await db.Selected.create({ id: cartid });
  }
  return cart;
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

// Map type → quantity column
const quantityMap = {
  processor: "processorqty",
  motherboard: "motherboardqty",
  ram: "ramqty",
  graphics: "graphicsqty",
  ssd: "ssdqty",
  casefan: "casefanqty",
  case: "caseqty",
  powersupply: "powersupplyqty",
  keyboard: "keyboardqty",
  mouse: "mouseqty",
};

router.get("/", async (req, res) => {
  try {
    const { cartid } = req.query;

    if (!cartid) {
      return res.status(400).json({ message: "Cart ID is required" });
    }

    const cart = await getCart(cartid);

    const response = {
      processor: {
        item: db.Processor && cart.processorid
          ? await db.Processor.findByPk(cart.processorid)
          : null,
        quantity: cart.processorqty || 1,
      },

      motherboard: {
        item: db.Motherboard && cart.motherboardid
          ? await db.Motherboard.findByPk(cart.motherboardid)
          : null,
        quantity: cart.motherboardqty || 1,
      },

      ram: {
        item: db.Ram && cart.ramid ? await db.Ram.findByPk(cart.ramid) : null,
        quantity: cart.ramqty || 1,
      },

      graphics: {
        item: db.Graphic && cart.graphicsid
          ? await db.Graphic.findByPk(cart.graphicsid)
          : null,
        quantity: cart.graphicsqty || 1,
      },

      ssd: {
        item: db.Ssd && cart.ssdid ? await db.Ssd.findByPk(cart.ssdid) : null,
        quantity: cart.ssdqty || 1,
      },

      casefan: {
        item: db.Fan && cart.casefanid ? await db.Fan.findByPk(cart.casefanid) : null,
        quantity: cart.casefanqty || 1,
      },

      case: {
        item: db.Case && cart.caseid ? await db.Case.findByPk(cart.caseid) : null,
        quantity: cart.caseqty || 1,
      },

      powersupply: {
        item: db.Psu && cart.powersupplyid
          ? await db.Psu.findByPk(cart.powersupplyid)
          : null,
        quantity: cart.powersupplyqty || 1,
      },

      keyboard: {
        item: db.Keyboard && cart.keyboardid
          ? await db.Keyboard.findByPk(cart.keyboardid)
          : null,
        quantity: cart.keyboardqty || 1,
      },

      mouse: {
        item: db.Mouse && cart.mouseid ? await db.Mouse.findByPk(cart.mouseid) : null,
        quantity: cart.mouseqty || 1,
      },
    };

    res.json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch cart" });
  }
});

router.post("/add", async (req, res) => {
  const { type, id, cartid } = req.body;

  if (!cartid) {
    return res.status(400).json({ message: "Cart ID is required" });
  }

  try {
    const cart = await getCart(cartid);
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
  const { cartid } = req.query;

  if (!cartid) {
    return res.status(400).json({ message: "Cart ID is required" });
  }

  try {
    const cart = await getCart(cartid);

    const column = columnMap[type];
    if (!column) {
      return res.status(400).json({ message: "Invalid component type" });
    }

    cart[column] = null;
    cart[quantityMap[type]] = 1;
    await cart.save();

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to remove component" });
  }
});

router.put("/quantity/:type", async (req, res) => {
  const { type } = req.params;
  const { quantity, cartid } = req.body;

  if (!cartid) {
    return res.status(400).json({ message: "Cart ID is required" });
  }

  try {
    if (!quantity || quantity < 1) {
      return res.status(400).json({ message: "Quantity must be at least 1" });
    }

    const quantityColumn = quantityMap[type];
    if (!quantityColumn) {
      return res.status(400).json({ message: "Invalid component type" });
    }

    const cart = await getCart(cartid);
    cart[quantityColumn] = quantity;
    await cart.save();

    res.json({ success: true, quantity });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to update quantity" });
  }
});

module.exports = router;
