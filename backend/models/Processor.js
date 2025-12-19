module.exports = (sequelize, DataTypes) => {
  const Processor = sequelize.define(
    'Processor',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      src: {
        type: DataTypes.STRING,
        allowNull: false
      },
      pname: {
        type: DataTypes.STRING,
        allowNull: false
      },
      info: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      cores: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      threads: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      baseClock: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      boostClock: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      tdp: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      socket: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.FLOAT
      }
    },
    {
      tableName: 'processors', 
      timestamps: false        
    }
  );

  return Processor;
};
