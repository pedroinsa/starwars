const chracters = require("./chracters.json")
const axios = require("axios")


module.exports = {
    list: async () => {
        const response = await axios.get("http://database:8004/Chracter")
        return response.data
    },
    get: async (id) => {
        const response = await axios.get(`http://database:8004/Chracter/${id}`)
        return response.data
    },
    create: async (chracterCreate) => {
        const response = await axios.post("http://database:8004/Chracter", chracterCreate)
        return { create: true }
    }
}


