let http = require('http')
let url = require('url')
let fileSystem = require('fs')


let server = http.createServer(function(req,res)
{

    let q = url.parse(req.url, true)
    let fileName = "."+q.pathname
    console.log(fileName)

    
    fileSystem.readFile(fileName,function(err, data)
    {
        if(err)
        {
            res.writeHead(404, {'Content-Type':'text/html'})
           
            return res.end('404 page not found')
        }
        else{
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write(data)
        return res.end()
        }
    }
    
    )
}

)
server.listen(8080)