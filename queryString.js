let http = require('http')
let url = require('url')

let server = http.createServer(function(req,res)
    {
        res.writeHead(200, {'Content-Type':'text/html'})
        let q = url.parse(req.url, true).query 
        let dates = `${q.month} ${q.year}`
        res.write(`Here's the date: ${dates}`)
        res.end()

    }

)

server.listen(8080)