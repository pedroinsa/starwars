const { Schema } = require("mongoose")

const chracterSchema = new Schema({
    _id: String,
    name: String,
    height: String,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: String,
    gender: String,
    homeworld: { type: String, ref: "Planet" },
    films: [{ type: String, ref: "Film" }]

})
chracterSchema.statics.list = async function () {
    return await this.find().populate("homeworld", ["_id", "name"])
        .populate("films", ["_id", "title"])
}
chracterSchema.statics.get = async function (id) {
    return await this.findById(id).populate("homeworld", ["_id", "name"])
        .populate("films", ["_id", "title"])
}

chracterSchema.statics.insert = async function (chracter) {
    return await this.create(chracter)
}

module.exports = chracterSchema