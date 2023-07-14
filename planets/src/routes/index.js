const { Router } = require("express")
const controller = require("../controllers")
const middlewares = require("../middlewares")


const router = Router()

router.get("/", controller.getPlanets)
router.get("/:id", controller.getPlanet)
router.post("/", middlewares.planetValidation, controller.createPlanet)

module.exports = router