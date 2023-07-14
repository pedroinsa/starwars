const { response } = require("../utils")
const Planets = require("../data")
module.exports = async(req,res) => {
    const { id } = req.params
    const response_ = await Planets.get(id)
    response(res, 201, response_)
}