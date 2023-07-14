const server = require("./src/server")
const { Chracter, Film, Planet } = require("./src/database/index")
const PORT = 8004


server.listen(PORT, () => {
    console.log(`Chracters server listening on port ${PORT}`)
})