const { Router } = require("express")
const controller = require("../controllers")
const middlewares = require("../middlewares")

const router = Router()

router.get("/", controller.getChracters)
router.get("/:id", controller.getChracter)
router.post("/", middlewares.chracterValidation, controller.createChracter)

module.exports = router