module.exports = (sequelize, DataTypes) => {
  const Case = sequelize.define(
    "Case",
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
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      src: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      formfactor: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gpuSupport: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
  return Case;
};
