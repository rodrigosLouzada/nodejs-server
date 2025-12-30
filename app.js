const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) =>{
    console.log(req.url, req.method ,req.headers);

    const url = req.url;
    const method = req.method;
    

    if(url === "/"){

    res.write("<html>");
    res.write("<head><title>My first page</title></head>");
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>');
    res.write("</html>");
    return res.end();
    }

    if(url === '/message' & method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk);
        })
        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString(); 
            console.log(parseBody);
            const message = parseBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
        })

        //res.writeHead(300, {});
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    

    res.setHeader('Content-type', 'text/html');

    res.write("<html>");
    res.write("<head><title>My first page</title></head>");
    res.write("<body><h1> hello world node</h1</body>");
    res.write("</html>");
    res.end();

    //process.exit();
});

server.listen(3002);