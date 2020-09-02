let server = require("./server.js")

let port = 7000;

server.listen(port, () => {
    console.log(`Server running on port ${port}`)
})