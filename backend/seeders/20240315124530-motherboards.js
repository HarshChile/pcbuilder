"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Motherboards",
      [
        {
          id: 1,
          pname: "MSI B650 GAMING PLUS WIFI ATX AM5 Motherboard",
          info:
            "The MSI B650 GAMING PLUS WIFI is a modern ATX motherboard designed for AMD’s AM5 platform, targeting gamers and performance-focused PC builders.",
          description:
            "The MSI B650 GAMING PLUS WIFI supports next-generation memory technology, enabling faster data speeds and improved system responsiveness.",
          src: "/images/mo1.jpg",
          socket: "AM5",
          price: 1263,
          ramsocket: "DDR5",
          pcieslot: 3,
          formfactor: "ATX",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          pname: "MSI MAG B850 TOMAHAWK MAX WIFI ATX AM5 Motherboard",
          info:
            "Feature-rich gaming motherboard with Wi-Fi 7 and strong power delivery.",
          description:
            "Supports Ryzen 7000–9000 CPUs, PCIe 5.0 GPU slot, fast NVMe, Wi-Fi 7, and 5Gb LAN.",
          src: "/images/mo2.jpg",
          socket: "AM5",
          price: 20657,
          ramsocket: "DDR5",
          pcieslot: 16,
          formfactor: "ATX",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          pname: "Gigabyte B850 AORUS ELITE WIFI7 ATX AM5",
          info:
            "Mid-range AORUS motherboard with Wi-Fi 7 and PCIe 5.0 readiness.",
          description:
            "Designed for modern Ryzen CPUs with strong cooling and tool-less slots.",
          src: "/images/mo3.jpg",
          socket: "AM5",
          price: 20657,
          ramsocket: "DDR5",
          pcieslot: 10,
          formfactor: "ATX",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          pname: "Asus B650E MAX GAMING WIFI W ATX AM5 Motherboard",
          info:
            "Stylish ATX motherboard offering modern connectivity and gaming features.",
          description:
            "Includes PCIe 5.0, DDR5, Wi-Fi 6E, and BIOS FlashBack.",
          src: "/images/mo4.jpg",
          socket: "AM5",
          price: 32107,
          ramsocket: "DDR5",
          pcieslot: 16,
          formfactor: "ATX",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          pname: "Asus PRIME B550M-A WIFI II Micro ATX AM4 Motherboard",
          info:
            "Compact Micro-ATX AM4 motherboard with Wi-Fi 6 and solid features.",
          description:
            "Supports Ryzen 3000–5000 CPUs with PCIe 4.0 and dual M.2 slots.",
          src: "/images/mo5.jpg",
          socket: "AM4",
          price: 15600,
          ramsocket: "DDR4",
          pcieslot: 17,
          formfactor: "Micro-ATX",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          pname: "ASUS TUF GAMING B850-PLUS WIFI ATX AM5 Motherboard",
          info:
            "Durable TUF Gaming motherboard with Wi-Fi 7 and strong VRMs.",
          description:
            "Supports DDR5, Ryzen 7000–9000 CPUs, and fast connectivity.",
          src: "/images/mo6.jpg",
          socket: "AM5",
          price: 28200,
          ramsocket: "DDR5",
          pcieslot: 15,
          formfactor: "ATX",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          pname: "Gigabyte B650 EAGLE AX ATX AM5 Motherboard",
          info:
            "Well-rounded ATX motherboard with Wi-Fi 6E and PCIe 5.0 M.2.",
          description:
            "Designed for Ryzen 7000+ CPUs with strong everyday performance.",
          src: "/images/mo7.jpg",
          socket: "AM5",
          price: 18000,
          ramsocket: "DDR5",
          pcieslot: 16,
          formfactor: "ATX",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          pname: "MSI B550M PRO-VDH WIFI Micro ATX AM4 Motherboard",
          info:
            "Budget-friendly Micro-ATX AM4 motherboard with Wi-Fi.",
          description:
            "Supports Ryzen CPUs with DDR4 and PCIe 4.0 x16.",
          src: "/images/mo8.jpg",
          socket: "AM4",
          price: 11000,
          ramsocket: "DDR4",
          pcieslot: 16,
          formfactor: "Micro-ATX",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          pname: "Gigabyte X870E AORUS ELITE WIFI7 ATX AM5 Motherboard",
          info:
            "High-end AORUS motherboard with Wi-Fi 7 and PCIe 5.0.",
          description:
            "Built for high-performance Ryzen builds with advanced cooling.",
          src: "/images/mo9.jpg",
          socket: "AM5",
          price: 27410,
          ramsocket: "DDR5",
          pcieslot: 20,
          formfactor: "ATX",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          pname: "Gigabyte B650M GAMING PLUS WIFI Micro ATX AM5 Motherboard",
          info:
            "Compact gaming motherboard with DDR5 and Wi-Fi 6E.",
          description:
            "Great balance of size, performance, and modern features.",
          src: "/images/mo10.jpg",
          socket: "AM5",
          price: 10800,
          ramsocket: "DDR5",
          pcieslot: 20,
          formfactor: "Micro-ATX",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Motherboards", null, {});
  },
};
