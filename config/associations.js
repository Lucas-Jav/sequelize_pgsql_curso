const Planet = require('../models/Planet.js');
const Satelite = require('../models/Satelite.js');

Planet.hasOne(Satelite, { onDelete: "CASCADE", onUpdate: "CASCADE" });
Satelite.belongsTo(Planet, { foreingKey: "planetId", as: "planet" })

module.exports = { Planet, Satelite };