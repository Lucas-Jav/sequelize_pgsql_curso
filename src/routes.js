const express = require("express");
const routes = express.Router();

const PlanetController = require("../controllers/PlanetController.js");

routes.post("/planets", PlanetController.store);

routes.get("/planets", PlanetController.index);

module.exports = routes;