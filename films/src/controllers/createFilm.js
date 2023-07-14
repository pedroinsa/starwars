const { response } = require("../utils")
const Films = require("../data")
module.exports = async (req, res) => {
    const filmCreate = req.body
    const respuesta = await Films.create(filmCreate)
    response(res, 200, respuesta)
}
