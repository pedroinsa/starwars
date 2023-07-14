const { Router } = require("express")
const controller = require("../controllers")
const middlewares = require("../middlewares")


const router = Router()

router.get("/", controller.getFilms)
router.get("/:id", controller.getFilm)
router.post("/", middlewares.filmValidation, controller.createFilm)

module.exports = router