const express = require("express")
const morgan = require("morgan")
const server = express()


server.use(morgan("dev"))
server.use(express.json())
server.use("/planets", require("./routes"))

server.use("*", (req, res) => {
    res.status(404).send("Not found")
})

server.use((error, req, res, next) => {
    res.status(error.statusCode || 500).send({ error: true, message: error.message })
})
module.exports = server

