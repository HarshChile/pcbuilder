module.exports = (sequelize, DataTypes) => {
  const Fan = sequelize.define(
    "Fan",
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
        src: {
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
      blades: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        speed: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
  return Fan;
};
