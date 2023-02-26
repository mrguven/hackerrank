var http = requare('http');
var fs = require('fs');
 
var server = http.createServer(function (req,res) {


    
    if(req.url=='/') {

fs.readfile('index.html',function(err,data) {


     res.write(data);  
     res.write('<html><h1>hello world <h/></html/>')

    res.end('the message is delivered')



});

}

if(req.url=='/login') {

        fs.readFile('login.html',function(err,data){
            
            res.write(data);


        })

}



    
})







    


server.listen(8000);