const server = require("./src/server")
const PORT = 8001

server.listen(PORT, () => {
    console.log(`Chracters server listening on port ${PORT}`)
})