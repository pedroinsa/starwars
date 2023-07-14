const films = require("./films.json")
const axios = require("axios")



module.exports = {
    list: async () => {
        const response = await axios.get("http://database:8004/Film")
        return response.data
    },
    get: async (id) => {
        const response = await axios.get(`http://database:8004/Film/${id}`)
        return response.data

    },
    create: async (filmCreate) => {
        const response = await axios.post("http://database:8004/Film", filmCreate)
        return { create: true }
    }
}


