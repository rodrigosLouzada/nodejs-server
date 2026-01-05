const http = require('http');

const server = http.createServer((req, res) =>{

    const url = req.url;
    const method = req.method;
    const funnyNames = ['joao', 'gabriel', 'joaquim'];

    if(url === '/' & method === 'GET'){

    res.write("<html>");
    res.write("<head><title>HOME WORK PAGE</title></head>");

    for(let name of funnyNames){
        res.write(`<h1>Olá, ${name}!</h1>`);
    }
    res.write('<body><h2> end of the loop </h2></body>');
    res.write("</html>");
    return res.end();

    };
});

server.listen(3004);