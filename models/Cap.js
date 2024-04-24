const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize.js");

const Cap = sequelize.define("caps", {
    name: DataTypes.STRING,
    registerNumber: DataTypes.STRING
});

module.exports = Cap;