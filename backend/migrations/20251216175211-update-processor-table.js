'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Rename existing columns
    await queryInterface.renameColumn('Processors', 'name', 'pname');
    await queryInterface.renameColumn('Processors', 'processorid', 'id');

    // Add new columns
    await queryInterface.addColumn('Processors', 'src', {
      type: Sequelize.STRING,
      allowNull: false
    });
    await queryInterface.addColumn('Processors', 'info', {
      type: Sequelize.STRING,
      allowNull: false
    });
    await queryInterface.addColumn('Processors', 'description', {
      type: Sequelize.TEXT,
      allowNull: false
    });
  },

  async down(queryInterface, Sequelize) {
    // Undo renames
    await queryInterface.renameColumn('Processors', 'pname', 'name');
    await queryInterface.renameColumn('Processors', 'id', 'processorid');

    // Remove added columns
    await queryInterface.removeColumn('Processors', 'src');
    await queryInterface.removeColumn('Processors', 'info');
    await queryInterface.removeColumn('Processors', 'description');
  }
};
