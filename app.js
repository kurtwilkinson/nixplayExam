const taskOne = require("./taskOne.js")
const { LRUCache } = require("./taskTwo.js")
const http = require("http")
const hostname = "localhost"
const port = 8000

const server = http.createServer((req, res) => {
    if (req.url === '/firstTask') {
        const nums = [3, 2, 1, 5, 6, 4]
        const k = 1
        const result = taskOne.findKthLargest(nums, k)
    
        res.end(result.toString())
    } else if (req.url === '/secondTask') {
        const cache = new LRUCache(3);

        cache.put(33, 1)
        cache.put(2, 1, 1000)
        cache.put(1, 1)
        cache.put(33, 2)


        setTimeout(() => {
            console.log(cache.get(2)); // -1, expired
        }, 2000);
        
        console.log(cache.get(33)); // 1

        res.end("ok")
    }
})

server.listen(port, hostname, () => {
    console.log(`Server running in port: ${port}`)
})
