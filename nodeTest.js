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


/*
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


class App extends React.Component {

    style={
        fontStyle:"bold",
        color:"teal"
    }

    render() {
        return <div className="App">
            <h1 style={this.style}>Welcome</h1>
            </div>
    }
}


isMomHappy=true;
const willGetNewPhone = new Promise((resolve, reject) => {
    if (isMomHappy) {
        const phone = {
            name:'Iphone 10',
            price: 4000,
            color:'silver'
        }
        resolve(phone)
    }
    else {
        const error= new Error('mom is not happy');
        reject(error);
    }
})


const askMom = function(){
    willGetNewPhone.then(data=> {
        console.log(data)
    }).catch(error=> {
        console.log(error)
    })
}


const showToFriends = function (phone) {
    const message = "he friends this is my new Phone" + phone.name;
    return Promise.resolve(message);
}







*/





    


server.listen(8000);