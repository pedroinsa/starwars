const { response } = require("../utils")
const Chracters = require("../data")
module.exports = async (req, res) => {
    const { id } = req.params
    const response_ = await Chracters.get(id)
    response(res, 201, response_)

}