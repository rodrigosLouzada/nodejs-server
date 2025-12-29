const http = require('http');

// function rqListener(req, res){

// }

const server = http.createServer((req, res) =>{
    console.log(req.url, req.method ,req.headers);

    res.setHeader('Content-type', 'text/html');

    res.write("<html>");
    res.write("<head><title>My first page</title></head>");
    res.write("<body><h1> hello world node</h1</body>");
    res.write("</html>");
    res.end();

    //process.exit();
});

server.listen(3002);