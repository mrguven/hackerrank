import { application } from "express";

let bill=[12,12,12,6,8,10]


function bonAppetit(bill, k, b) {
    // Write your code here

let sumBill= 0;


for (let i = 0; i< bill.length;i++) {
    sumBill += bill[i];
}

sumBill=sumBill-bill[k];
sumBill= sumBill / 2;

if (sumBill<b) {
    console.log( b-sumBill);  // the website want to print on a new line, thus it shoul be in console.log().
}

else if (sumBill=b) {
    console.log( "Bon Appetit");
}



}



//-------------------------


let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20,20,10,10,10,20];
let n= 14;

function sockMerchant(n, ar) {
    // Write your code here
let firstpairs = 0;
let totalPairs= 0;
let sockArray =[];
    for(let i = 0;i<n-2;i++) {
        for (let j= 0; j<n-1;j++)  {
            if (ar[i]== ar[j] ) {
                firstpairs++;
                
            }
           else if (ar[i] == ar[j]) {

            }
           
        }
        if ( firstpairs%2==0){

            sockArray[i]=firstpairs;}
            else if (firstpairs%2!==0) {
                sockArray[i] = firstpairs-1;
            }


    }
return sockArray;
}

console.log(sockMerchant(n, ar) )


//------------------------

function sockMerchant(n, ar) {
    // Write your code here
    var result = 0;
    var sameNumber = false;
    var emp = new Array();
    for (var i = 0; i < ar.length; i++) {
        if (emp.length > 0) {
            for (var j = 0; j < emp.length; j++) {
                if (emp[j] == ar[i]) {
                    emp[j] = null;
                    sameNumber = true;
                    result++;
                }
            }
            if (sameNumber == false) {
                emp[emp.length] = ar[i];
            }
        } else {
            emp[emp.length] = ar[i];
        }
        sameNumber = false;
    }
    return result;

}



///-----------------------------------




// var validPath = function(n, edges, source, destination) {
    




// };









// function findLongestWordLength(str) {

    
    
//       str= str.split(" ");
//      let longWord=0;
     
//     for(var i = 0;i< str.length;i++);
//         if (str[i].length > longWord) {
//             longWord=str[i].length ;
   
//         }
//         longWord=str.length;
//       return longWord;
//     }
    
//     console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
    



    let arr=[ [13, 27, 18, 26],[4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]];
    function largestOfFour(arr) {
        let newArray= [];
        
        
        for(let i = 0;i<arr.length;i++){
            let bigNumber = -999;
              for(let j=0;j<arr[i].length;j++){
                if(bigNumber<arr[i][j]){
                 bigNumber=arr[i][j];
                
                
                 
                }
               
              }
              newArray.push(bigNumber);
        }
       
        
        return newArray;
         
        }
        
        console.log( largestOfFour(arr));


//-------------------------------




        function confirmEnding(str, target) {

            let newStr= str.split("",);
            let newTarget= target.split("");

            newStr= newStr.slice(newStr.length-newTarget.length)
console.log(newStr)
console.log(newTarget)
            
            
                if (newStr===newTarget) {
                    return true;
                }

                else if (newStr!==newTarget) {
                    return false;
                }
            
           
              
            }
            
            

            console.log(confirmEnding("Open sesame", "same"))




            //-----------------------------------


            // function caesarCipher(s, k) {

            //  let   alphabet:  "abcdefghijklmnopqrstuvwxyz".split("");

            //  let newAlphabet="";

            //  for (let i= 0;i<s.length;i++) {
            //         if (/[a-z]/i.test(s[i])) {
            //             if (s[i]==s[i].toLowerCase()) {
            //                 newAlphabet+= alphabet[alphabet.indexOf(s[i]+k)%26]
            //             }
            //             else{
            //                 newAlphabet+= alphabet[alphabet.indexOf(s[i]+k)%26].toUpperCase;
            //             }
            //         }

            //  }






            // }



            //-----------------------




            function minimumNumber(n, password) {
                // Return the minimum number of characters to make the password strong
                
             
                 
            //match the characters. Returns -1 if no match found
                let numbers = password.search(/[0-9]/);
                let upper = password.search(/[A-Z]/);
                let lower = password.search(/[a-z]/);
                let special = password.search(/[!@#$%^&*()+-]/);
                
                let minNum = 0
                let min = 6
                if(numbers === -1) {
                    minNum++ };
                if(upper === -1) {
                    minNum++ };
                if(lower === -1) {
                    minNum++} ;
                if(special === -1) {
                    minNum++} ; 
               
                if(n < min){
                    return Math.max(minNum, min - n);
                } else {
                    return minNum;
                }
                
            
            }


            //--------------------------------



            function marsExploration(s) {
                // Write your code here
                
                s=s.split("");
               
                let result = 0;
                
                
                for (let i=0;i<s.length-2;i+=3) {
                    if (s[0+i]!=="S") {
                        result+=1;
                    } 
                    if (s[1+i]!=="O") {
                        result+=1;
                    } 
                     if (s[2+i]!=="S") {
                        result+=1;
                    } 
                    
                }
                    
                    return result;
                
                }


//--------------------------------
s="saveChangesInTheEditor";

function camelcase(s) {
    // Write your code here
    
    
    let result=0;
    for(let i=0;i<s.length;i++ ){
        if (s.charAt(i)===s.charAt(i).toUpperCase) {
            result++;
        }
       
    }
    
    return result+1;
    

}

console.log(camelcase(s));


///------------------------


function hackerrankInString(s) {
    // Write your code here
    if (/.*h.*a.*c.*k.*e.*r.*r.*a.*n.*k.*/i.test(s)==true) {
        return "YES";
    }
else {
    return "NO";
}    
 
}

//--------------------


let s1= "hello";
let s2="world";

function twoStrings(s1, s2) {
    // Write your code here
    for(let i=0; i<s1.length; i++){
        if(s2.includes(s1[i])){
            return "YES";
        }
    }
    return "NO";

}

console.log(twoStrings(s1,s2))




//----------------------


let numKids = [1,2,3,4,5];
let partnerNames =["john","eva","adem","tr","br",];
let locations =["ams","rot","brug","den","haag",];
let jobTitles =["doctor","engineer","techicien","artist","teacher",];

 function selectRondomly (xx) {

     return xx[Math.floor(Math.random()*5)];
    



};

function tellFortune () {
console.log( `You will be a ${selectRondomly (jobTitles)} in ${selectRondomly (locations)}, 
married to ${selectRondomly (partnerNames)} with ${selectRondomly (numKids)} kids.`)
}

console.log(tellFortune(numKids,partnerNames,locations,jobTitles));
console.log(tellFortune(numKids,partnerNames,locations,jobTitles));


//----------------------


const mondayTasks = [
    {
      name: 'Daily standup',
      duration: 30, // specified in minutes
    },
    {
      name: 'Feature discussion',
      duration: 120,
    },
    {
      name: 'Development time',
      duration: 240,
    },
    {
      name: 'Talk to different members from the product team',
      duration: 60,
    },
  ];

  const hourlyRate = 25;


  function computeEarnings(hourlyRate,mondayTasks) {
    // TODO complete this function
let totalPrice =0;
    for (let i=0;i<mondayTasks.length;i++) {
        
        totalPrice+= mondayTasks[i].duration/60 * hourlyRate;
    }


return totalPrice;
  }

  console.log(computeEarnings(hourlyRate,mondayTasks))



  //-----------------------------




  function gameOfThrones(s) {
    let oddCharacters = 0;
    [...new Set([...s])].forEach((char) => {
      const match = s.match(new RegExp(char, "g"));
      if (match.length % 2 !== 0) oddCharacters++;
    });
    return oddCharacters <= 1 ? "YES" : "NO";
  }
  

//------------------------



function plusMinus(arr) {
    // Write your code here
let positive=0;
let negative=0;
let zero=0;
let result =[];

for (let i=0;i<arr.length;i++) {
    if (arr[i]>0) {
        positive++;
    }
    
    else if (arr[i]<0) {
        negative++
    }
    
    else if (arr[i]==0) {
        zero++
    }
    
}

result[0] = (positive/arr.length).toFixed(6);
result[1] = (negative/arr.length).toFixed(6);
result[2] = (zero/arr.length).toFixed(6);
    console.log(result[0]);
console.log(result[1]);
console.log(result[2]);

}


//-----------------------



function miniMaxSum(arr) {
    // Write your code here

let minN=arr[0];
let maxN=arr[0];
let total=0;

for (let i=0;i<arr.length;i++) {

if (arr[i]>maxN) {
    maxN=arr[i];
}

if (arr[i]<minN) {
    minN=arr[i];
}

total+=arr[i];

}

console.log(total-maxN,total-minN)


}



//----------------------


/* GUI = Grafical User interface
API= Application user interface , other program interact
 with other program 

 key needed.
 
 request format,
 response format;
 status code{200..,400..}

 --2** is successful response
 --3** is redirection responce
 --4** is client error
 --5** is server error

 get() -- get info from server
 post()-- create source in server
 put() -- update file or data
 patch()- patially update
 delete() -- delete the file


xml is  data format 
json is data format

 
<Footer /> = so we call the fonction and its component






var http = requare('http');
var fs = require('fs');
 
var server = http.createServer(function (req,res) {

fs.readfile('index.html',function(err,data) {

})


res.write('<html><h1>hello world <h/></html/>')




})



set() method => 

var express = require ('express');

var app = express();
app.get('/', function (req,res) {
    fs.readFile('/index.html', function(err,data) {
        res.write(data);
        res.end('this is end');
        console.log('homeController');
    })
})


//----


app.get('/',(req.res)=> {
    console.log ("Hello World")
    res.sendStatus(500);
    res.send("Hi")
}   )


 



//----------------


app.get('/', function (req,res) {
    res.send('hello')
})





new promise (function(resolve,reject){
    setTimeout(() => {
        resolve(5)
    }, 1000);
}).then(function(number){
    console.log(number);
    return number*number;
}).then(function(number) {
    console.log(number)
})


app.get('/admin', function(req,res)  {
    console.log('ID ' + req.query.id)
res.send('Hello world')
});




--fetch().then(res => res.json() = we can pull data from API
);

--async-await ----

function fetchPosts() {
    const  response = fetch("https://jsonplaceholder.typicode.com/posts").then(res=> res.json())
}

function fetchPosts() {
    const  response = fetch("https://jsonplaceholder.typicode.com/posts").then(res=> res.json())
}


Async and await


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor:"red"};
    }

    render() {
        return(
            <h1> My favorite Color is {this.state.favoritecolor}  </h1>
        )
    }

}

const root= ReactDom.createRoot(document.getElementById('root'));
root.render(<Header />);










*/ 


//----------------




//------------------


//--async-await ----




export default function Header () {

    <button onClick={shoot} >talls;d</button>
            // in the react, the functions is written inside curly braces
    function shoot() {
        application.GeolocationCoordinat();
    }

}




const path= require('path');

const filePath= path.join('/content','Hackerrank','app,js')

function lonelyinteger(a) {
    // Write your code here
    
    
   let result=0; 
    for (let i=0;i<a.length;i++) {
         let repeat=0;
        for(let j=0;j<a.length;j++) {
            if ( a[i]==a[j]) {
                repeat++;
                
            }
           
            
        }
         if (repeat!==2) {
                 result=a[i];
            }
       
    }
    
     return result;

}


//--------------------

arr = [[11 ,2 ,4],[4, 5, 6],[10, 8, -12]]

function diagonalDifference(arr) {
    // Write your code here
    
     let forw=0;
    let back=0;
    let result=0;
    let j=arr.length-1;
   for (let i=0;i<arr.length;i++) {
forw+=  arr[i][i];
while (j>=0){
                 
      
          
         
         back+=  arr[i][j];
        j--;
        break;
    }

    }
    
     return (Math.abs(back-forw))
    

}

console.log(diagonalDifference(arr))


//----------------------

