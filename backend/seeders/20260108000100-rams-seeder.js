"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("rams", [
      {
        id: 1,
        pname: "Corsair Vengeance LPX DDR4 RAM",
        src: "image/rams/r1.jpg",
        info: "DDR4 | 16GB (2x8GB) | 3200MHz",
        description:
          "High-performance DDR4 memory from Corsair designed for gaming and productivity builds. Features an aluminum heat spreader for efficient cooling and stable XMP overclocking. Ideal for modern Intel and AMD platforms.",
        ramtype: "DDR4",
        ramsize: 16,
        speed: 3200,
        price: 14700
      },
      {
        id: 2,
        pname: "Kingston Fury Beast DDR4 RAM",
        src: "image/rams/r2.jpg",
        info: "DDR4 | 16GB | 3200MHz",
        description:
          "Reliable Kingston Fury Beast DDR4 RAM offering excellent everyday and gaming performance. Supports XMP profiles and is compatible with a wide range of motherboards.",
        ramtype: "DDR4",
        ramsize: 16,
        speed: 3200,
        price: 8600
      },
      {
        id: 3,
        pname: "G.SKILL Trident Z RGB DDR4 RAM",
        src: "image/rams/r3.jpg",
        info: "DDR4 | 16GB | RGB | 3200MHz",
        description:
          "Premium DDR4 RAM with customizable RGB lighting and strong overclocking support. Designed for high-end gaming and enthusiast PC builds requiring both performance and aesthetics.",
        ramtype: "DDR4",
        ramsize: 16,
        speed: 3200,
        price: 16900
      },
      {
        id: 4,
        pname: "G.Skill Ripjaws S5 DDR5 RAM",
        src: "image/rams/r4.jpg",
        info: "DDR5 | 16GB | 5600MHz",
        description:
          "Next-generation DDR5 memory from G.Skill optimized for Intel 12th/13th Gen and AMD AM5 platforms. Delivers higher bandwidth and improved efficiency compared to DDR4.",
        ramtype: "DDR5",
        ramsize: 16,
        speed: 5600,
        price: 20000
      },
      {
        id: 5,
        pname: "G.Skill Ripjaws V DDR4 RAM",
        src: "image/rams/r5.jpg",
        info: "DDR4 | 16GB | 3200MHz",
        description:
          "Popular G.Skill Ripjaws V DDR4 gaming memory offering stable performance and wide compatibility. Known for durability and reliable XMP support.",
        ramtype: "DDR4",
        ramsize: 16,
        speed: 3200,
        price: 9500
      },
      {
        id: 6,
        pname: "G.Skill Ripjaws V DDR4 3200MHz RAM",
        src: "image/rams/r6.jpg",
        info: "DDR4 | 16GB (2x8GB) | 3200MHz",
        description:
          "Classic Ripjaws V DDR4 desktop memory kit from G.Skill. Designed for gamers and power users with excellent stability, performance, and overclocking support.",
        ramtype: "DDR4",
        ramsize: 16,
        speed: 3200,
        price: 10990
      },
      {
        id: 7,
        pname: "Kingston Fury Beast 3200MHz DDR4 RAM",
        src: "image/rams/r7.jpg",
        info: "DDR4 | 16GB (2x8GB) | 3200MHz",
        description:
          "High-performance Kingston Fury Beast DDR4 RAM suitable for gaming, multitasking, and productivity. Offers excellent value with consistent performance.",
        ramtype: "DDR4",
        ramsize: 16,
        speed: 3200,
        price: 8649
      },
      {
        id: 8,
        pname: "G.SKILL Ripjaws DDR3 2133MHz RAM",
        src: "image/rams/r8.jpg",
        info: "DDR3 | 4GB | 2133MHz",
        description:
          "Older-generation DDR3 Ripjaws memory designed for legacy systems. Suitable for older desktops and laptops requiring DDR3 or DDR3L RAM.",
        ramtype: "DDR3",
        ramsize: 4,
        speed: 2133,
        price: 3700
      },
      {
        id: 9,
        pname: "G.SKILL Ripjaws DDR3 1600MHz RAM",
        src: "image/rams/r9.jpg",
        info: "DDR3 | 16GB (2x8GB) | 1600MHz",
        description:
          "DDR3 desktop memory kit for older Intel and AMD platforms. Reliable performance for legacy systems and older-generation motherboards.",
        ramtype: "DDR3",
        ramsize: 16,
        speed: 1600,
        price: 9772
      },
      {
        id: 10,
        pname: "G.Skill Ripjaws R3 Legacy RAM",
        src: "image/rams/r10.jpg",
        info: "DDR3/DDR4 | 8GB | Legacy Series",
        description:
          "Older G.Skill Ripjaws R3 series RAM designed for previous-generation platforms. Suitable for budget upgrades and legacy PC builds.",
        ramtype: "DDR3",
        ramsize: 8,
        speed: 1600,
        price: 6000
      },
      {
        id: 11,
        pname: "G.Skill Ripjaws V Early DDR4 RAM",
        src: "image/rams/r11.jpg",
        info: "DDR4 | 16GB | 3000MHz",
        description:
          "Early-generation G.Skill Ripjaws V DDR4 RAM offering solid performance for first-gen DDR4 platforms. Reliable and widely compatible.",
        ramtype: "DDR4",
        ramsize: 16,
        speed: 3000,
        price: 8000
      },
      {
        id: 12,
        pname: "G.Skill Trident Z DDR4 RAM",
        src: "image/rams/r12.jpg",
        info: "DDR4 | 16GB | 3200MHz",
        description:
          "High-performance G.Skill Trident Z DDR4 RAM designed for enthusiasts and gamers. Known for excellent build quality and strong overclocking capability.",
        ramtype: "DDR4",
        ramsize: 16,
        speed: 3200,
        price: 18000
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("rams", null, {});
  }
};
