module.exports = (sequelize, DataTypes) => {
  const Psu = sequelize.define(
    "Psu",
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
        voltage: {
        type: DataTypes.FLOAT,
        allowNull: false,
        },
    },
    {
        timestamps: false,
    }
);
  return Psu;
}