import { createServer } from 'http';
import { readfile, readFile } from 'fs';
import { CLIENT_RENEG_LIMIT } from 'tls';

var express= require('express');
 
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



var attantion = new Promise(function(resolve,reject) {
    if (true) {
        resolve ('it is completed') 
    }
    else {
        reject ('failure')
    }
});

attantion.then(function(data) {
    console.log(data)
}).catch(function(error) {
    console.log(error)
})







    


server.listen(8000);