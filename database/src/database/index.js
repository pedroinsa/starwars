const mongoose = require("mongoose")
const { MONGO_URI } = require("../config/envs")

const conn = mongoose.createConnection(MONGO_URI)

/////////////// Chracter.find().populate("films").then((data) => console.log(data))
module.exports = {
    Chracter: conn.model("Chracter", require("../database/schemas/chracterSchema")),
    Film: conn.model("Film", require("../database/schemas/filmSchema")),
    Planet: conn.model("Planet", require("../database/schemas/planetSchema"))

}
