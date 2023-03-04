import { createServer } from 'http';
import { readfile, readFile } from 'fs';
 
var server = createServer(function (req,res) {


    
    if(req.url=='/') {

        readfile('index.html',function(err,data) {


     res.write(data);  
     res.write('<html><h1>hello world <h/></html/>')

    res.end('the message is delivered')



});

}

if(req.url=='/login') {

        readFile('login.html',function(err,data){
            
            res.write(data);


        })

}



    
})







    


server.listen(8000);