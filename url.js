let http = require('http')

let server = http.createServer(function(req, res)
    {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write("Hiii there")
        res.write(req.url)
        res.end()
    }

)

server.listen(8080)