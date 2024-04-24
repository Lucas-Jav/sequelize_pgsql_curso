const Planet = require('../models/Planet.js');
const Satelite = require('../models/Satelite.js');
const Cap = require('../models/Cap.js');
const Spaceship = require('../models/Spaceship.js');

/* Planet.hasOne(Satelite, { onDelete: "CASCADE", onUpdate: "CASCADE" });
Satelite.belongsTo(Planet, { foreingKey: "planetId", as: "planet" }) */

Planet.hasMany(Satelite, { onDelete: "CASCADE", onUpdate: "CASCADE" });
Satelite.belongsTo(Planet, { foreingKey: "planetId", as: "planet" })

/* many-to-many */
Cap.belongsToMany(Spaceship, {
    foreingKey: "capId",
    through: "capSpaceship",
    as: "spaceships"
});

Spaceship.belongsToMany(Cap, {
    foreingKey: "spaceshipId",
    through: "capSpaceship",
    as: "caps"
});

module.exports = { Planet, Satelite, Cap, Spaceship };