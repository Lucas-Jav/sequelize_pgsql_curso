const Satelite = require("../models/Satelite.js");
const Planet = require("../models/Planet.js");

module.exports = {
    async store(req, res) {
        const {planetId} = req.params;
        const {name, serial_number} = req.body;
        
        const planet = await Planet.findByPk(planetId);

        if (!planet) {
            return res.status(400).json({error: "Esse planeta nao existe!"});
        }

        const satelite = await Satelite.create({
            name,
            serial_number,
            planetId
        });

        return res.json(satelite);
    },

    async index(req, res) {
        const {planetId} = await req.params;
        
        if(!planetId) {
            res.status(404).json({error: "Esse planeta nao existe!"})
        }

        const planet = await Planet.findByPk(planetId, {
            include: Satelite,
        })

        return res.json(planet);
    },

    async put(req, res) {
        
    },

    async delete(req, res) {
        
    }
}