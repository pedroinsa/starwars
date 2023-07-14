const { catchedErrors } = require("../utils")
module.exports = {
    getFilm: catchedErrors(require("./getFilm")),
    getFilms: catchedErrors(require("./getFilms")),
    createFilm: catchedErrors(require("./createFilm"))

}