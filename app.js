const http = require('http');

// function rqListener(req, res){

// }

const server = http.createServer((req, res) =>{
    console.log(req);
    console.log("hello world");
});

server.listen(3002);