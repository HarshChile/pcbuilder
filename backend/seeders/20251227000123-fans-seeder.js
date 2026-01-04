"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "fans",
      [
        {
          id: 1,
          pname: "Thermalright Peerless Assassin 120 SE 66.17 CFM CPU Cooler",
          src: "/images/f1.jpg",
          info: "High-performance dual-tower air CPU cooler with six heatpipes and dual PWM fans.",
          description:
            "Dual-tower air cooler with nickel-plated copper base and six heatpipes for rapid heat transfer. Equipped with two TL-C12C 120 mm PWM fans delivering strong airflow while remaining relatively quiet, suitable for gaming and productivity systems.",
          blades: "Dual 120 mm PWM fans (TL-C12C) with Fluid Dynamic Bearing",
          speed: "1550 RPM",
          price: 5000,
        },
        {
          id: 2,
          pname: "ARCTIC Liquid Freezer III Pro 360 77 CFM Liquid CPU Cooler",
          src: "/images/f2.jpg",
          info: "High-performance 360 mm AIO liquid CPU cooler with triple PWM fans.",
          description:
            "360 mm AIO cooler featuring a thick aluminum radiator, copper cold plate with micro-skived fins, and an integrated VRM fan. Three P12 Pro PWM fans provide high airflow and static pressure for excellent cooling under heavy workloads.",
          blades: "Three 120 mm P12 Pro PWM fans",
          speed: "3000 RPM",
          price: 11000,
        },
        {
          id: 3,
          pname: "Cooler Master Hyper 212 Black Edition",
          src: "/images/f3.jpg",
          info: "Budget-friendly air CPU cooler with wide Intel and AMD socket support.",
          description:
            "Tower-style air cooler using four direct-contact heatpipes and a 120 mm PWM fan. Ideal for mainstream CPUs and moderate workloads without heavy overclocking.",
          blades: "Single 120 mm PWM fan",
          speed: "800 – 2000 RPM",
          price: 4299,
        },
        {
          id: 4,
          pname: "Thermalright Aqua Elite V3 360 mm AIO",
          src: "/images/f4.jpg",
          info: "360 mm liquid CPU cooler optimized for balanced airflow and low noise.",
          description:
            "All-in-one liquid cooler with a large 360 mm radiator and three PWM fans designed for good airflow and static pressure. Supports modern Intel and AMD sockets and offers quieter cooling than stock solutions.",
          blades: "Three 120 mm S-FDB PWM fans",
          speed: "1500 RPM",
          price: 6400,
        },
        {
          id: 5,
          pname: "Corsair Nautilus 360 RS ARGB",
          src: "/images/f5.jpg",
          info: "ARGB-equipped 360 mm AIO liquid CPU cooler with strong cooling performance.",
          description:
            "360 mm AIO featuring three ARGB fans and a copper cold plate designed for high thermal loads. Offers strong cooling and visual flair for gaming and productivity systems.",
          blades: "Three 120 mm ARGB PWM fans",
          speed: "400 – 2500 RPM",
          price: 9300,
        },
        {
          id: 6,
          pname: "ARCTIC Liquid Freezer III Pro A-RGB 360",
          src: "/images/f6.jpg",
          info: "High-performance ARGB 360 mm liquid CPU cooler with integrated VRM fan.",
          description:
            "Features a thick aluminum radiator, reinforced tubing, and three P12 Pro A-RGB PWM fans delivering up to 77 CFM airflow. Includes MX-6 thermal paste and flexible PWM control.",
          blades: "Three 120 mm P12 Pro A-RGB PWM fans",
          speed: "600 – 3000 RPM",
          price: 11000,
        },
        {
          id: 7,
          pname: "Thermalright Phantom Spirit 120 SE CPU Air Cooler",
          src: "/images/f7.jpg",
          info: "Dual-tower air CPU cooler with ARGB lighting and strong airflow.",
          description:
            "Uses seven heatpipes and dual 120 mm PWM fans to deliver efficient cooling while remaining relatively quiet. Suitable for gaming and productivity systems.",
          blades: "Dual 120 mm ARGB PWM fans",
          speed: "1500 RPM",
          price: 5500,
        },
        {
          id: 8,
          pname: "Thermalright Assassin X 120 SE CPU Air Cooler",
          src: "/images/f8.jpg",
          info: "Compact air CPU cooler offering solid thermal performance at low cost.",
          description:
            "Dual-stack heatsink combined with a quality 120 mm PWM fan provides efficient cooling for everyday CPUs and mainstream builds.",
          blades: "Single 120 mm PWM fan",
          speed: "1550 RPM",
          price: 3900,
        },
        {
          id: 9,
          pname: "Noctua NH-D15 CPU Cooler",
          src: "/images/f9.jpg",
          info: "Flagship dual-tower air CPU cooler known for quiet and powerful performance.",
          description:
            "Equipped with two 140 mm NF-A15 PWM fans and six heatpipes, offering industry-leading cooling performance and excellent acoustics.",
          blades: "Dual 140 mm NF-A15 PWM fans",
          speed: "1500 RPM",
          price: 11000,
        },
        {
          id: 10,
          pname: "be quiet! Dark Rock Pro 5",
          src: "/images/f10.jpg",
          info: "High-end air CPU cooler focused on silent operation and strong cooling.",
          description:
            "Asymmetrical dual-tower design with six heatpipes and premium Silent Wings 4 fans for quiet yet powerful cooling.",
          blades: "120 mm + 135 mm Silent Wings 4 PWM fans",
          speed: "2000 RPM",
          price: 9500,
        },
        {
          id: 11,
          pname: "Thermalright Aqua Elite V3 ARGB",
          src: "/images/f11.jpg",
          info: "ARGB-enabled 360 mm liquid CPU cooler for high thermal loads.",
          description:
            "360 mm AIO cooler with ARGB-ready pump and three PWM fans optimized for high airflow and static pressure. Suitable for Intel and AMD platforms.",
          blades: "Three 120 mm ARGB PWM fans",
          speed: "2100 RPM",
          price: 12000,
        },
        {
          id: 12,
          pname: "Corsair NAUTILUS 360 RS ARGB",
          src: "/images/f12.jpg",
          info: "Premium 360 mm ARGB liquid CPU cooler with strong airflow and quiet pump.",
          description:
            "Features three RS120 ARGB PWM fans with AirGuide technology, a convex copper cold plate, and quiet pump operation for high-end CPUs.",
          blades: "Three 120 mm RS120 ARGB PWM fans",
          speed: "2100 RPM",
          price: 15000,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("fans", null, {});
  },
};
