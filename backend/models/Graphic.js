module.exports = (sequelize, DataTypes) => {
  const Graphic = sequelize.define(
    "Graphic",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      src: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      info: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      vram: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      coreClock: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      boostClock: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      formfactor: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tdp: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
  return Graphic;
};
