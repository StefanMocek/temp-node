const http = require('http')

const server = http.createServer((req, res)=>{
    if (req.url === '/'){
        res.end('Welcome to our home page')
    }
    if (req.url === '/about'){
        res.end('Elo, this is uor history')
    } 
    res.end(`<h1>Ooops!</h1>
    <p>We cant find html</p>
    <a href="/">back home</a>`)
})

server.listen(5000)