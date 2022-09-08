const http = require('http');
const fs = require('fs')
const port = 3000;

const routes = (link, res) =>{
    fs.readFile(link, (err, data)=>{
        if (err) {
            res.writeHead(404)
            res.write('Error')
        } else {
            res.write(data)
        }
        res.end()
    })
}

const server = http.createServer((req, res) => {
    const url=req.url
    console.log(url)
    if(url === '/about'){
       routes('./about.html', res)
    } else if(url === '/contact'){
        routes('./contact.html', res)
    } else {
        routes('./index.html', res)
    }
    res.writeHead(200,{
       'Content-Type':'text/html'
    })
});

server.listen(port, () => {
  console.log(`Server running at port ${port} `);
});