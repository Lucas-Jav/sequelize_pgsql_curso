const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize.js");

const Spaceship = sequelize.define("spaceships", {
    name: DataTypes.STRING,
    capacity: DataTypes.INTEGER
});

module.exports = Spaceship;