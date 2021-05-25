let http = require('http')
let url = require('url')
let fileSystem = require('fs')
const PORT = process.env.PORT || 5000

let server = http.createServer(function(req,res)
{
    let q = url.parse(req.url, true)
    let fileName = "."+q.pathname
    console.log(fileName)
    if(fileName === "./")
    {
        fileName = "navbar"

    }
    fileName = fileName + ".html"
    fileSystem.readFile(fileName, function(err, data)
    {
        if(err)
        {
            res.writeHead(404, {'Content-Type':'text/html'})
            res.end("404 page not found")
        }
        else
        {
            res.writeHead(200, {'Content-type':'text/html'})
            res.write(data)
            res.end()
        }
    }
    )
}
)

server.listen(PORT)