'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ssds', [
      {
        id: 1,
        pname: 'Samsung 980 PRO M.2 NVMe Gen4 SSD',
        src: '/images/s1.jpg',
        info: 'High-end PCIe Gen4 NVMe SSD designed for extreme performance.',
        description:
          'The Samsung 980 PRO is a flagship PCIe 4.0 NVMe SSD built for gamers, creators, and professionals who demand ultra-fast storage. With exceptional read and write speeds, it dramatically improves load times and system responsiveness while maintaining thermal stability under sustained workloads.',
        capacity: '500 GB',
        price: 4200
      },
      {
        id: 2,
        pname: 'Samsung 970 EVO NVMe Gen3 SSD',
        src: '/images/s2.jpg',
        info: 'Reliable PCIe Gen3 NVMe SSD with strong everyday performance.',
        description:
          'The Samsung 970 EVO delivers fast boot times, quick application launches, and reliable gaming performance. It is ideal for users who want NVMe speeds without moving to newer Gen4 platforms.',
        capacity: '500 GB',
        price: 5000
      },
      {
        id: 3,
        pname: 'Crucial MX500 2.5-Inch SATA SSD',
        src: '/images/s3.jpg',
        info: 'High-quality SATA SSD focused on reliability and value.',
        description:
          'The Crucial MX500 is a dependable SATA III SSD offering excellent endurance and consistent performance. It is a great upgrade from HDDs for OS installation, applications, and game storage.',
        capacity: '1 TB',
        price: 8200
      },
      {
        id: 4,
        pname: 'Samsung 870 EVO SATA III SSD',
        src: '/images/s4.jpg',
        info: 'Premium SATA SSD with excellent durability and performance.',
        description:
          'The Samsung 870 EVO provides near-maximum SATA speeds with outstanding reliability. Ideal for systems without NVMe support, it ensures smooth multitasking and fast application loading.',
        capacity: '1 TB',
        price: 6800
      },
      {
        id: 5,
        pname: 'WD Blue SN550 NVMe SSD',
        src: '/images/s5.jpg',
        info: 'Budget-friendly NVMe SSD for everyday computing.',
        description:
          'The WD Blue SN550 offers a great balance of speed and value, delivering faster performance than SATA SSDs while remaining affordable for mainstream users.',
        capacity: '500 GB',
        price: 3500
      },
      {
        id: 6,
        pname: 'WD Black SN770 NVMe Gen4 SSD',
        src: '/images/s6.jpg',
        info: 'Mid-range PCIe Gen4 NVMe SSD optimized for gaming.',
        description:
          'The WD Black SN770 delivers faster load times and smooth gameplay with PCIe Gen4 speeds, making it a solid choice for modern gaming systems.',
        capacity: '500 GB',
        price: 4999
      },
      {
        id: 7,
        pname: 'Crucial T500 PCIe Gen4 NVMe SSD',
        src: '/images/s7.jpg',
        info: 'High-speed Gen4 NVMe SSD for demanding workloads.',
        description:
          'The Crucial T500 is designed for high-performance gaming and content creation, offering strong speeds, reliability, and efficiency on modern platforms.',
        capacity: '1 TB',
        price: 18500
      },
      {
        id: 8,
        pname: 'Crucial P5 Plus PCIe Gen4 NVMe SSD',
        src: '/images/s8.jpg',
        info: 'Powerful Gen4 NVMe SSD with excellent read/write speeds.',
        description:
          'The Crucial P5 Plus delivers high throughput and low latency, making it an excellent choice for gamers and creative professionals.',
        capacity: '1 TB',
        price: 13500
      },
      {
        id: 9,
        pname: 'Crucial P3 Plus PCIe Gen4 NVMe SSD',
        src: '/images/s9.jpg',
        info: 'Value-focused Gen4 NVMe SSD with balanced performance.',
        description:
          'The Crucial P3 Plus offers PCIe Gen4 speeds at a competitive price, making it ideal for users seeking modern performance without premium cost.',
        capacity: '2 TB',
        price: 33999
      },
      {
        id: 10,
        pname: 'Seagate FireCuda 530 PCIe Gen4 NVMe SSD',
        src: '/images/s10.jpg',
        info: 'Premium enthusiast-grade Gen4 NVMe SSD.',
        description:
          'The FireCuda 530 is built for extreme performance and endurance, making it suitable for high-end gaming rigs and professional workloads.',
        capacity: '500 GB',
        price: 9000
      },
      {
        id: 11,
        pname: 'Samsung 980 NVMe Gen3 SSD',
        src: '/images/s11.jpg',
        info: 'Efficient NVMe SSD for OS and daily use.',
        description:
          'The Samsung 980 delivers fast boot times and responsive performance, making it ideal for operating systems, applications, and gaming.',
        capacity: '500 GB',
        price: 5000
      },
      {
        id: 12,
        pname: 'Crucial BX500 SATA SSD',
        src: '/images/s12.jpg',
        info: 'Entry-level SATA SSD for budget systems.',
        description:
          'The Crucial BX500 is a cost-effective storage upgrade offering improved reliability and performance over traditional hard drives.',
        capacity: '480 GB',
        price: 3500
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ssds', null, {});
  }
};
