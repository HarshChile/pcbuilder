'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('graphics', [
      {
        src: 'g1.jpg',
        pname: 'MSI GeForce RTX 3060 Ventus 2X 12G',
        info: 'Mid-range RTX 3060 with dual-fan cooling for smooth 1080p and 1440p gaming.',
        description: 'The MSI GeForce RTX 3060 Ventus 2X is built on NVIDIA’s Ampere architecture and features 12 GB of GDDR6 memory on a 192-bit bus. It supports ray tracing, DLSS, G-SYNC, and DirectX 12 Ultimate. The Ventus 2X dual TORX Fan 3.0 cooling system ensures stable thermals during extended gaming sessions.',
        vram: 12,
        coreClock: 1320,
        boostClock: 1807,
        formfactor: 'mATX',
        tdp: 170,
        price: 19000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        src: 'g2.jpg',
        pname: 'ASUS PRIME GeForce RTX 5070 Ti 16GB',
        info: 'High-performance RTX 5070 Ti designed for demanding gaming and creative tasks.',
        description: 'The ASUS PRIME RTX 5070 Ti features 16 GB of GDDR7 memory on a 256-bit bus, delivering excellent bandwidth for 1440p and 4K gaming. It supports modern ray tracing, DLSS, and advanced display standards with a robust triple-fan cooling solution.',
        vram: 16,
        coreClock: 2452,
        boostClock: 2497,
        formfactor: 'ATX',
        tdp: 300,
        price: 96000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        src: 'g3.jpg',
        pname: 'Sapphire PULSE Radeon RX 9060 XT 16GB',
        info: 'AMD RDNA 4-based GPU offering excellent 1440p gaming performance.',
        description: 'The Sapphire PULSE RX 9060 XT is built on AMD’s RDNA 4 architecture and includes 16 GB of GDDR6 memory. Its dual-fan cooling solution provides balanced thermals and quiet operation while supporting FidelityFX Super Resolution and modern ray tracing.',
        vram: 16,
        coreClock: 2700,
        boostClock: 3290,
        formfactor: 'ATX',
        tdp: 170,
        price: 45000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        src: 'g4.jpg',
        pname: 'Gigabyte WINDFORCE OC GeForce RTX 5070 12GB',
        info: 'Overclocked RTX 5070 with efficient WINDFORCE cooling.',
        description: 'The Gigabyte WINDFORCE OC RTX 5070 is designed for efficient gaming at 1080p and 1440p resolutions. Equipped with 12 GB of GDDR7 memory and a high-performance WINDFORCE cooling system, it maintains consistent performance under load.',
        vram: 12,
        coreClock: 2325,
        boostClock: 2542,
        formfactor: 'ATX',
        tdp: 750,
        price: 60000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        src: 'g5.jpg',
        pname: 'PowerColor Reaper Radeon RX 9060 XT 16GB',
        info: 'Reliable dual-fan AMD GPU for modern gaming workloads.',
        description: 'The PowerColor Reaper RX 9060 XT combines AMD RDNA 4 architecture with 16 GB of GDDR6 memory. It delivers stable gaming performance with efficient cooling and support for modern graphics APIs.',
        vram: 16,
        coreClock: 2620,
        boostClock: 3230,
        formfactor: 'ATX',
        tdp: 160,
        price: 40000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        src: 'g6.jpg',
        pname: 'Gigabyte GAMING OC Radeon RX 9070 XT 16GB',
        info: 'Factory-overclocked AMD GPU for high-end gaming.',
        description: 'The Gigabyte GAMING OC RX 9070 XT features a factory overclock and 16 GB of GDDR6 memory on a 256-bit bus. It is designed for demanding 1440p and 4K gaming workloads with stable thermals.',
        vram: 16,
        coreClock: 2520,
        boostClock: 3060,
        formfactor: 'ATX',
        tdp: 850,
        price: 70000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        src: 'g7.jpg',
        pname: 'ASUS ROG Astral OC GeForce RTX 5090 32GB',
        info: 'Flagship RTX 5090 GPU with massive VRAM for extreme workloads.',
        description: 'The ASUS ROG Astral OC RTX 5090 is a flagship graphics card featuring 32 GB of GDDR7 memory. Designed for 4K/8K gaming, AI workloads, and professional content creation, it delivers unmatched performance with premium cooling.',
        vram: 32,
        coreClock: 2437,
        boostClock: 2580,
        formfactor: 'ATX',
        tdp: 1000,
        price: 345000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        src: 'g8.jpg',
        pname: 'ASRock Challenger Radeon RX 9070 XT 16GB',
        info: 'Mid-to-high-range AMD GPU with strong gaming performance.',
        description: 'The ASRock Challenger RX 9070 XT provides 16 GB of GDDR6 memory and AMD RDNA 4 architecture. It supports ray tracing, FidelityFX Super Resolution, and FreeSync for smooth gameplay.',
        vram: 16,
        coreClock: 2400,
        boostClock: 2970,
        formfactor: 'ATX',
        tdp: 750,
        price: 68700,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        src: 'g9.jpg',
        pname: 'MSI SHADOW 2X OC GeForce RTX 5060 8GB',
        info: 'Compact mid-range GPU designed for efficient 1080p gaming.',
        description: 'The MSI SHADOW 2X OC RTX 5060 features NVIDIA Blackwell architecture and 8 GB of GDDR7 memory. Its compact dual-fan design ensures efficient cooling for mainstream gaming builds.',
        vram: 8,
        coreClock: 2535,
        boostClock: 2527,
        formfactor: 'ATX',
        tdp: 145,
        price: 36000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        src: 'g10.jpg',
        pname: 'Gigabyte WINDFORCE SFF GeForce RTX 5070 Ti 16GB',
        info: 'Compact SFF GPU delivering strong performance.',
        description: 'The Gigabyte WINDFORCE SFF RTX 5070 Ti delivers high-end performance in a compact form factor. With 16 GB of GDDR7 memory and PCIe 5.0 support, it is ideal for small-form-factor gaming builds.',
        vram: 16,
        coreClock: 2295,
        boostClock: 2452,
        formfactor: 'mATX',
        tdp: 300,
        price: 95000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        src: 'g11.jpg',
        pname: 'Sapphire PULSE Radeon RX 9070 XT 16GB',
        info: 'Gaming-focused AMD GPU with advanced cooling.',
        description: 'The Sapphire PULSE RX 9070 XT includes 16 GB of GDDR6 memory and advanced cooling for stable performance at 1440p and 4K gaming resolutions.',
        vram: 16,
        coreClock: 2400,
        boostClock: 2970,
        formfactor: 'ATX',
        tdp: 304,
        price: 76800,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        src: 'g12.jpg',
        pname: 'Gigabyte GAMING OC Radeon RX 9060 XT 16GB',
        info: 'Custom-tuned AMD GPU built for smooth 1440p gaming.',
        description: 'The Gigabyte GAMING OC RX 9060 XT features a factory overclock and 16 GB of GDDR6 memory. Its WINDFORCE cooling system ensures efficient heat dissipation during long gaming sessions.',
        vram: 16,
        coreClock: 2780,
        boostClock: 3320,
        formfactor: 'ATX',
        tdp: 450,
        price: 48000,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('graphics', null, {});
  }
};
