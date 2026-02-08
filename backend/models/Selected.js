module.exports = (sequelize, DataTypes) => {
  const Selected = sequelize.define(
    "Selected",
    {
        cartid: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        processorid: {
            type: DataTypes.INTEGER,
        },
        processorqty: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
        },
        graphicsid: {
            type: DataTypes.INTEGER,
        },
        graphicsqty: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
        },
        ssdid: {
            type: DataTypes.INTEGER,
        },
        ssdqty: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
        },
        ramid: {
            type: DataTypes.INTEGER,
        },
        ramqty: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
        },
        casefanid: {
            type: DataTypes.INTEGER,
        },
        casefanqty: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
        },
        motherboardid: {
            type: DataTypes.INTEGER,
        },
        motherboardqty: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
        },
        powersupplyid: {
            type: DataTypes.INTEGER,
        },
        powersupplyqty: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
        },
        keyboardid: {
            type: DataTypes.INTEGER,
        },
        keyboardqty: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
        },
        mouseid: {
            type: DataTypes.INTEGER,
        },
        mouseqty: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
        },
        caseid: {
            type: DataTypes.INTEGER,
        },
        caseqty: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
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
