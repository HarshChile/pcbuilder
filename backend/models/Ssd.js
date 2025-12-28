module.exports = (sequelize, DataTypes) => {
  const Ssd = sequelize.define(
    "Ssd",
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
        capacity: {
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
  return Ssd;
};
