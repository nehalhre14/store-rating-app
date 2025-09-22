const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define("User", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING(60), allowNull: false },
  email: { type: DataTypes.STRING(100), unique: true, allowNull: false },
  password: { type: DataTypes.STRING(255), allowNull: false },
  address: { type: DataTypes.STRING(400) },
  role: { type: DataTypes.ENUM("admin","user","owner"), defaultValue: "user" }
}, { tableName: "users", timestamps: true });

module.exports = User;
