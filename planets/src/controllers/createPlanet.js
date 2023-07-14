const { response } = require("../utils")
const Planets = require("../data")
module.exports = async (req, res) => {
    const planetCreate = req.body
    const respuesta = await Planets.create(planetCreate)
    response(res, 200, respuesta)
}
