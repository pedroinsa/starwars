const Chracters = require("../data")
const { response } = require("../utils")

module.exports = async (req, res) => {
    const chracters = await Chracters.list()
    response(res, 201, chracters)


}