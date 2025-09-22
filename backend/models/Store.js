const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./User");

const Store = sequelize.define("Store", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING(60), allowNull: false },
  email: { type: DataTypes.STRING(100) },
  address: { type: DataTypes.STRING(400) },
  ownerId: { type: DataTypes.INTEGER, allowNull: true }
}, { tableName: "stores", timestamps: true });

Store.belongsTo(User, { foreignKey: "ownerId", as: "owner" });

module.exports = Store;
