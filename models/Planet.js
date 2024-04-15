const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize.js");

const Planet = sequelize.define("planets", {
    name: DataTypes.STRING,
    position: DataTypes.INTEGER,
});

module.exports = Planet;