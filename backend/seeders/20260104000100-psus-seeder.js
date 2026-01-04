"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("psus", [
      {
        id: 1,
        pname:
          "MSI MAG A750GL PCIE5 750 W 80+ Gold Certified Fully Modular ATX Power Supply",
        src: "/images/ps1.jpg",
        info: "750W 80+ Gold fully modular PSU with ATX 3.0 and PCIe 5.0 support.",
        description:
          "The MSI MAG A750GL PCIE5 is engineered for modern gaming and performance-focused PCs. Featuring 80 PLUS Gold certification, it delivers high efficiency with reduced heat output. Fully modular flat cables improve airflow and simplify cable management, while native PCIe 5.0 support ensures compatibility with next-generation GPUs and future upgrades.",
        voltage: 744,
        price: 10500,
      },
      {
        id: 2,
        pname:
          "MSI MAG A850GL PCIE5 850 W 80+ Gold Certified Fully Modular ATX Power Supply",
        src: "/images/ps2.jpg",
        info: "850W Gold-rated PSU supporting ATX 3.0 and PCIe 5.0.",
        description:
          "Designed for high-end gaming systems and workstations, the MSI MAG A850GL PCIE5 delivers stable and consistent power under heavy workloads. Advanced internal components maintain voltage stability, while multiple protection mechanisms safeguard your system hardware.",
        voltage: 846,
        price: 12500,
      },
      {
        id: 3,
        pname: "MSI MAG A650BN 650 W 80+ Bronze Certified ATX Power Supply",
        src: "/images/ps3.jpg",
        info: "Affordable 650W 80+ Bronze PSU for mainstream builds.",
        description:
          "The MSI MAG A650BN is a dependable and budget-friendly power supply suited for entry-level gaming and office PCs. It uses DC-to-DC circuitry and active PFC to ensure stable power delivery and improved efficiency while keeping costs low.",
        voltage: 648,
        price: 5200,
      },
      {
        id: 4,
        pname: "Corsair RM850e (2025) 850 W Fully Modular ATX Power Supply",
        src: "/images/ps4.jpg",
        info: "850W Gold PSU with ATX 3.1 and PCIe 5.1 support.",
        description:
          "The Corsair RM850e (2025) offers quiet and efficient power delivery for demanding systems. Zero RPM fan mode ensures silent operation under low loads, while fully modular cables reduce clutter and improve airflow for clean, professional builds.",
        voltage: 850,
        price: 13500,
      },
      {
        id: 5,
        pname:
          "Corsair SF1000 (2024) 1000 W 80+ Platinum Certified Fully Modular SFX Power Supply",
        src: "/images/ps5.jpg",
        info: "1000W Platinum SFX PSU for compact high-end systems.",
        description:
          "The Corsair SF1000 delivers extreme power in a compact SFX form factor. With 80 PLUS Platinum efficiency, premium Japanese capacitors, and Zero RPM fan mode, it is ideal for powerful small-form-factor gaming and workstation builds.",
        voltage: 1000,
        price: 24500,
      },
      {
        id: 6,
        pname: "Corsair RM1000x (2024) 1000 W Fully Modular ATX Power Supply",
        src: "/images/ps6.jpg",
        info: "1000W Gold PSU for enthusiast and workstation PCs.",
        description:
          "Built for demanding workloads, the Corsair RM1000x provides consistent power delivery for high-end gaming and professional systems. Advanced cooling, high-quality components, and full modularity ensure reliability and long-term performance.",
        voltage: 1000,
        price: 18500,
      },
      {
        id: 7,
        pname: "MSI MAG A550BN 550 W 80+ Bronze Certified ATX Power Supply",
        src: "/images/ps7.jpg",
        info: "Entry-level 550W PSU for everyday computing.",
        description:
          "The MSI MAG A550BN is ideal for budget PCs and light gaming setups. It provides stable output with essential safety protections and quiet cooling, making it suitable for daily workloads and home systems.",
        voltage: 546,
        price: 4200,
      },
      {
        id: 8,
        pname:
          "Montech CENTURY II 850 W 80+ Gold Certified Fully Modular ATX Power Supply",
        src: "/images/ps8.jpg",
        info: "850W Gold PSU with Cybenetics Platinum-level efficiency.",
        description:
          "The Montech Century II 850W combines modern PSU design with excellent efficiency. Fully modular flat cables improve airflow, while a smart fan system minimizes noise during operation, making it suitable for powerful gaming builds.",
        voltage: 849,
        price: 11500,
      },
      {
        id: 9,
        pname: "Corsair RM750e (2025) 750 W Fully Modular ATX Power Supply",
        src: "/images/ps9.jpg",
        info: "750W Gold PSU optimized for gaming PCs.",
        description:
          "The Corsair RM750e (2025) offers an excellent balance of efficiency, silence, and reliability. Fully modular cables enhance airflow and aesthetics, while modern power standards ensure compatibility with current and future hardware.",
        voltage: 750,
        price: 9800,
      },
      {
        id: 10,
        pname: "Corsair RM850x (2024) 850 W Fully Modular ATX Power Supply",
        src: "/images/ps10.jpg",
        info: "Premium 850W Gold-rated fully modular PSU.",
        description:
          "Engineered for enthusiasts, the Corsair RM850x (2024) delivers clean and stable power. High-quality internal components, Zero RPM fan mode, and robust modular cables make it ideal for high-end gaming and professional systems.",
        voltage: 850,
        price: 15500,
      },
      {
        id: 11,
        pname:
          "Cooler Master MWE GOLD 750 V2 FULL MODULAR 750 W ATX Power Supply",
        src: "/images/ps11.jpg",
        info: "750W Gold fully modular PSU for gaming systems.",
        description:
          "The Cooler Master MWE Gold 750 V2 offers stable and efficient power delivery for gaming and productivity builds. Its fully modular design improves airflow and cable management while ensuring long-term reliability.",
        voltage: 850,
        price: 8900,
      },
      {
        id: 12,
        pname: "Thermaltake Smart 500 W 80+ Certified ATX Power Supply",
        src: "/images/ps12.jpg",
        info: "500W budget PSU for office and home PCs.",
        description:
          "The Thermaltake Smart 500W is designed for basic desktop systems requiring reliable and affordable power. It features standard efficiency, quiet cooling, and essential connectors for mainstream computing needs.",
        voltage: 420,
        price: 3600,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("psus", null, {});
  },
};
