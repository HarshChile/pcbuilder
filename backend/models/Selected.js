module.exports = (sequelize, DataTypes) => {
  const Selected = sequelize.define(
    "Selected",
    {
        processorid: {
            type: DataTypes.INTEGER,
        },
        graphicsid: {
            type: DataTypes.INTEGER,
        },
        ssdid: {
            type: DataTypes.INTEGER,
        },
        ramid: {
            type: DataTypes.INTEGER,
        },
        casefanid: {
            type: DataTypes.INTEGER,
        },
        motherboardid: {
            type: DataTypes.INTEGER,
        },
        powersupplyid: {
            type: DataTypes.INTEGER,
        },
        keyboardid: {
            type: DataTypes.INTEGER,
        },
        mouseid: {
            type: DataTypes.INTEGER,
        },
        caseid: {
            type: DataTypes.INTEGER,
        },
        cartid: {
            type: DataTypes.INTEGER,
        },
        
    },
    {
      timestamps: false,
    }
  );
  return Selected;
};
