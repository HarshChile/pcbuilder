module.exports = (sequelize, DataTypes) => {
  const Ram = sequelize.define(
    "Ram",
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
        ramtype: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        memsize: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },
        speed: {
        type: DataTypes.INTEGER,
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
  return Ram;
}