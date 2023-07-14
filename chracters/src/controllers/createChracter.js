const { response } = require("../utils")
const Chracters = require("../data")
module.exports = async (req, res) => {
    const chracterCreate = req.body
    const respuesta = await Chracters.create(chracterCreate)
    response(res, 200, respuesta)
}
