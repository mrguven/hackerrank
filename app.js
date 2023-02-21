var http = require('http');

var server = http.createServer(function (req,res){
    res.write('hello world');
    res.end('the message over')
})

server.listen(8000);