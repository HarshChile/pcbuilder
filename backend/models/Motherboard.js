module.exports = (sequelize, DataTypes) => {
  const Motherboard = sequelize.define(
    "Motherboard",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
      src: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      socket: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
      },
      ramsocket: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      formfactor: {
        type: DataTypes.STRING,
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
  return Motherboard;
};
