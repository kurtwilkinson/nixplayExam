const taskOne = require("./taskOne.js")
const http = require("http")
const hostname = "localhost"
const port = 8000

const server = http.createServer((req, res) => {
    const nums = [3, 2, 1, 5, 6, 4]
    const k = 1
    const result = taskOne.findKthLargest(nums, k)

    res.end(result.toString())
})

server.listen(port, hostname, () => {
    console.log(`Server running in port: ${port}`)
})
