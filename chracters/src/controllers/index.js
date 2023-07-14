const { catchedErrors } = require("../utils")
const getChracter = require("./getChracter")
module.exports = {
    getChracters: catchedErrors(require("./getChracters")),
    createChracter: catchedErrors(require("./createChracter")),
    getChracter: catchedErrors(require("./getChracter"))

}