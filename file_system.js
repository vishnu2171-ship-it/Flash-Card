let http = require('http')
let fileSystem = require('fs')

let server = http.createServer(function(req, res)
{
    fileSystem.readFile('fileSystem.html', function(err, data)
    
    {
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write(data)
        res.end()
    }
    
    
    )
}
)
server.listen(8080) 