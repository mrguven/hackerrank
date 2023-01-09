
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
    var sonuc = 0;
    var isAyniSayi = false;
    var emp = new Array();
    for (var i = 0; i < ar.length; i++) {
        if (emp.length > 0) {
            for (var j = 0; j < emp.length; j++) {
                if (emp[j] == ar[i]) {
                    emp[j] = null;
                    isAyniSayi = true;
                    sonuc++;
                }
            }
            if (isAyniSayi == false) {
                emp[emp.length] = ar[i];
            }
        } else {
            emp[emp.length] = ar[i];
        }
        isAyniSayi = false;
    }
    return sonuc;

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