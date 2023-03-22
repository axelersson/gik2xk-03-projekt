module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "cartRow",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
    },
    { underscored: true }
  );
};

const sequelize = require("sequelize");
