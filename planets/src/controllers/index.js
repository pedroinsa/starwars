const { catchedErrors } = require("../utils")
module.exports = {
    getPlanet: catchedErrors(require("./getPlanet")),
    getPlanets: catchedErrors(require("./getPlanets")),
    createPlanet: catchedErrors(require("./createPlanet"))
}