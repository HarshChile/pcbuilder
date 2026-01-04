'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cases', [
      {
        id: 1,
        pname: 'Montech XR ATX Mid Tower Case',
        price: 9500,
        src: '/images/c1.jpg',
        formfactor: 'ATX',
        gpuSupport: '420mm',
        description:
          'The Montech XR features a panoramic tempered-glass design that highlights internal components while maintaining excellent airflow. It comes with three pre-installed ARGB PWM fans and supports up to nine fans in total. With support for large GPUs up to 420 mm and CPU coolers up to 175 mm, it is well suited for modern gaming and performance-focused builds. Magnetic dust filters and modern front I/O improve long-term usability.',
        info:
          'The Montech XR is a stylish and functional ATX mid-tower PC case designed for gaming and general PC builds. It offers ample internal space, modern I/O connectivity, and strong cooling support out of the box.'
      },
      {
        id: 2,
        pname: 'Phanteks XT PRO ATX Mid Tower Case',
        price: 9655,
        src: '/images/c2.jpg',
        formfactor: 'ATX',
        gpuSupport: '280mm',
        description:
          'The Phanteks XT Pro ATX mid-tower case offers a spacious steel chassis with a tempered glass side panel for showcasing internal components. It supports a wide range of cooling configurations including large radiators and multiple fans, making it suitable for high-performance systems. Excellent cable management and strong airflow design help maintain clean and cool builds.',
        info:
          'The Phanteks XT Pro ATX Mid Tower PC Case is designed for ATX builds with excellent cooling support, a spacious interior, and modern front I/O including USB-C.'
      },
      {
        id: 3,
        pname: 'Corsair 3500X ARGB ATX Mid Tower Case',
        price: 11200,
        src: '/images/c3.jpg',
        formfactor: 'ATX',
        gpuSupport: '425mm',
        description:
          'The Corsair 3500X ARGB combines sleek aesthetics with practical airflow and expandability. It includes three pre-installed ARGB fans and supports a wide range of radiator sizes. Large GPU clearance and a builder-friendly interior make it ideal for high-end gaming systems.',
        info:
          'A stylish and builder-friendly ATX mid-tower PC case with panoramic tempered glass panels and three pre-installed ARGB fans.'
      },
      {
        id: 4,
        pname: 'NZXT H5 Flow (2024) ATX Mid Tower Case',
        price: 13400,
        src: '/images/c4.jpg',
        formfactor: 'ATX',
        gpuSupport: '410mm',
        description:
          'The NZXT H5 Flow (2024) emphasizes airflow with a mesh-focused design that allows air to pass freely through the case. It supports a wide range of motherboard sizes and comes with pre-installed airflow fans. Its compact yet flexible layout makes it ideal for modern performance builds.',
        info:
          'The NZXT H5 Flow Mid Tower Case is designed for excellent airflow and modern gaming builds with strong component compatibility.'
      },
      {
        id: 5,
        pname: 'Corsair 3500X ARGB ATX Mid Tower Case',
        price: 11000,
        src: '/images/c5.jpg',
        formfactor: 'ATX',
        gpuSupport: '425mm',
        description:
          'This Corsair 3500X ARGB mid-tower case features large tempered glass panels and integrated ARGB lighting for a premium appearance. It offers strong airflow potential, spacious GPU clearance, and convenient front I/O including USB-C for modern peripherals.',
        info:
          'A premium ARGB mid-tower PC case designed for gaming and performance desktop builds with excellent airflow and component flexibility.'
      },
      {
        id: 6,
        pname: 'Lian Li O11 Vision Compact ATX Mid Tower Case',
        price: 12900,
        src: '/images/c6.jpg',
        formfactor: 'ATX',
        gpuSupport: '408mm',
        description:
          'The Lian Li O11 Vision Compact is a premium dual-chamber mid-tower case with modular airflow options and excellent cable management. It supports large GPUs, extensive radiator configurations, and multiple fan placements for high-end enthusiast systems.',
        info:
          'A premium ATX mid-tower PC case blending elegant tempered glass aesthetics with flexible airflow and modular build support.'
      },
      {
        id: 7,
        pname: 'Fractal Design North ATX Mid Tower Case',
        price: 20000,
        src: '/images/c7.jpg',
        formfactor: 'ATX',
        gpuSupport: '355mm',
        description:
          'The Fractal Design North combines elegant real-wood accents with modern airflow design. It supports multiple cooling configurations and provides a clean, refined look suitable for both gaming setups and professional environments.',
        info:
          'A premium ATX mid-tower case that combines elegant design with functional airflow and strong component compatibility.'
      },
      {
        id: 8,
        pname: 'Cooler Master MasterBox Q300L MicroATX Mini Tower Case',
        price: 9500,
        src: '/images/c8.jpg',
        formfactor: 'mATX',
        gpuSupport: '360mm',
        description:
          'The Cooler Master Q300L features a compact perforated mesh design with modular I/O placement and magnetic dust filters. It supports Micro-ATX and Mini-ITX motherboards while offering flexible cooling options in a small footprint.',
        info:
          'A compact Micro-ATX mini tower PC case designed for small-form-factor builds with flexible airflow and modular design.'
      },
      {
        id: 9,
        pname: 'Lian Li O11 Vision Compact ATX Mid Tower Case',
        price: 12900,
        src: '/images/c9.jpg',
        formfactor: 'ATX',
        gpuSupport: '408mm',
        description:
          'This compact version of the O11 Vision series features modular mesh or glass panels, excellent airflow control, and a dual-chamber layout. It is ideal for showcase builds with large GPUs and advanced cooling solutions.',
        info:
          'A compact premium ATX mid-tower PC case offering customizable airflow configurations and excellent component compatibility.'
      },
      {
        id: 10,
        pname: 'HYTE Y70 Touch Infinite ATX Mid Tower Case',
        price: 33984,
        src: '/images/c10.jpg',
        formfactor: 'ATX',
        gpuSupport: '422mm',
        description:
          'The HYTE Y70 Touch Infinite is a premium dual-chamber mid-tower case featuring a large integrated touchscreen display. It offers extensive cooling and hardware support, vertical GPU mounting, and excellent airflow for enthusiast-grade systems.',
        info:
          'A high-end ATX mid-tower case designed for showcase gaming builds with touchscreen monitoring and strong cooling support.'
      },
      {
        id: 11,
        pname: 'Fractal Design North XL ATX Full Tower Case',
        price: 25000,
        src: '/images/c11.jpg',
        formfactor: 'ATX',
        gpuSupport: '413mm',
        description:
          'The Fractal Design North XL expands the North series into a full-tower format, offering exceptional space for high-end components, large radiators, and custom cooling loops. Its refined design blends premium materials with functional airflow.',
        info:
          'A premium full-tower PC case combining elegant design with support for high-performance hardware and custom cooling.'
      },
      {
        id: 12,
        pname: 'Lian Li A3-mATX MicroATX Mini Tower Case',
        price: 26800,
        src: '/images/c12.jpg',
        formfactor: 'mATX',
        gpuSupport: '415mm',
        description:
          'The Lian Li A3-mATX is a compact yet highly versatile micro-form-factor case supporting large GPUs and extensive cooling options. Its mesh construction ensures excellent airflow while maintaining a minimal footprint.',
        info:
          'A compact Micro-ATX mini tower case designed for powerful small-form-factor builds with flexible PSU and cooling support.'
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('cases', null, {});
  }
};
