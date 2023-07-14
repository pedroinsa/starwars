const planets = require("./planets.json")
const axios = require("axios")


module.exports = {
    list: async () => {
        const response = await axios.get("http://database:8004/Planet")
        return response.data
    },
    get: async (id) => {
        const response = await axios.get(`http://database:8004/Planet/${id}`)
        return response.data

    },
    create: async (planetCreate) => {
        const response = await axios.post("http://database:8004/Planet", planetCreate)
        return { create: true }
    }
}


