const express = require("express");
const routes = express.Router();

const PlanetController = require("../controllers/PlanetController.js");
const SateliteController = require("../controllers/SateliteController.js");
const CapController = require("../controllers/CapController.js");
const SpaceshipController = require("../controllers/SpaceshipController.js");

routes.post("/planets", PlanetController.store);
routes.get("/planets", PlanetController.index);
routes.put("/planets/:id", PlanetController.put);
routes.delete("/planets/:id", PlanetController.delete);

routes.post("/planet/:planetId/satelites", SateliteController.store);
routes.get("/planet/:planetId/satelites", SateliteController.index);

routes.post("/cap", CapController.store);
routes.get("/cap", CapController.index);

routes.post("/caps/:capId/spaceships", SpaceshipController.store);
routes.get("/caps/:capId/spaceships", SpaceshipController.index);

module.exports = routes;