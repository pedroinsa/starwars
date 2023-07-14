const { clientError } = require("../utils/errors")
module.exports = (req, res, next) => {
    const { title } = req.body
    if (title) return next()
    else throw new clientError("falta el nombre del film", 404)
}