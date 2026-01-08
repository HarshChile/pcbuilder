module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
        username: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
        uid: {
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
  return User;
};
