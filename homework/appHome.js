const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) =>{

    const url = req.url;
    const method = req.method;
    const funnyNames = ['joao', 'gabriel', 'joaquim'];
    
    if(url === '/'){

    res.write("<html>");
    res.write("<head><title>HOME WORK PAGE</title></head>");
    res.write('<body><form action="/fullName" method="POST"><input type="text" name="usersName"><button type="submit">Submit</button></form></body>');

    res.write("</html>");
    return res.end();

    };

    if(url === '/fullName' && method === 'POST'){
        const usersName = [];

        req.on('data', (chunk) => {
            usersName.push(chunk);
            console.log(usersName);
        });

         return req.on('end', () => {
            const fullName = Buffer.concat(usersName).toString();
            const message = fullName.split('=')[1];

            fs.writeFile("namesFile.txt", message, () => {
                res.setHeader('Content-type', 'text/html')
                res.write(`<h1>o nome: ${message} foi salvo sucesso!</h1>`);
                //res.statusCode = 302;
                //res.setHeader('Location', '/');
                return res.end();
            });
        });
    }


    if(url === '/users' & method === 'GET'){

    res.write("<html>")

        for(let name of funnyNames){
        res.write(`<h1>Olá, ${name}!</h1>`);
    }

    res.write('<body><h2> end of the loop </h2></body>');
    res.write("</html>");
    return res.end();
    }
});

server.listen(3004);