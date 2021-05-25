let http = require('http')   // it's an built in module of node to transfer data around the internet (import node.js core module)
let server = http.createServer(function(req, res)
    {
        res.writeHead(200, {'Content-Type' : 'text/html'})          // creating server and hadling the incoming requests
        res.end('<h1>Hey wassup </h1>')
    }
)

server.listen(8080) // listen for any incoming requests