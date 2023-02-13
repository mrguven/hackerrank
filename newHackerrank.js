
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
