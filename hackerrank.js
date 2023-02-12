

let a = [5, 6, 7,90,45,67,56];
let b = [3, 6, 10,89,679,89,100];




function compareTriplets(a, b) {
    
var c =[0,0];
    for (let i =0;i<a.length ; i++){
    if (a[i] > b[i]) {
    
        c[0]+=1;
    }
    else if (b[i] > a[i]) {
    
        c[1]+=1;
    }
    



}
return c;
}

console.log(compareTriplets(a,b));



//---------------------------


function hourglassSum(arr) {
    // Write your code here

let max=-5000;

for(let rowIndex = 0;rowIndex<arr.length-2;rowIndex++) {
    
     for(let colIndex=0;colIndex<arr[rowIndex].length-2;colIndex++){
        let tempMax = 0;
    
    for(let tempRowIndex = 0; tempRowIndex<3;tempRowIndex++){
        for(let tempColIndex = 0; tempColIndex<3;tempColIndex++){
        if(tempRowIndex!==1){
            tempMax+=arr[rowIndex+tempRowIndex][colIndex+tempColIndex];
        }
        else if (tempColIndex ===1){
             tempMax+=arr[rowIndex+tempRowIndex][colIndex+tempColIndex];
        }
    
        
    }
    }
    if (tempMax>max){
        max=tempMax;
    }
}
}
return max;
}




//-------------------------------

function hourglassSum(arr) {
    // Write your code here

let max=-5000;

for(let rowIndex = 0;rowIndex<arr.length-2;rowIndex++) {
    
     for(let colIndex=0;colIndex<arr[rowIndex].length-2;colIndex++){
        let tempMax = 0;
    
    for(let tempRowIndex = 0; tempRowIndex<3;tempRowIndex++){
        for(let tempColIndex = 0; tempColIndex<3;tempColIndex++){
        if(tempRowIndex!==1){
            tempMax+=arr[rowIndex+tempRowIndex][colIndex+tempColIndex];
        }
        else if (tempColIndex ===1){
             tempMax+=arr[rowIndex+tempRowIndex][colIndex+tempColIndex];
        }
    
        
    }
    }
    if (tempMax>max){
        max=tempMax;
    }
}
}
return max;
}








//-------------------------------





function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }
  console.log(removeItemOnce([2,5,9,1,5,8,5], 5))


//---------------

let arr11=[6,2,12,4,5,1];


let sum3= 0 ;
let maxSum=0;
let minSum=0;
let minArr=[];
let maxArr = [];
let i = 0;

function miniMaxSum(arr1) {
    // Write your code here

    let sum2 = arr11[0];
    let sum1 = arr11[0];
    for(;i<arr11.length;i++) {
        
        if(arr11[i]<sum2){
            sum2=arr11[i];
        }

        if(arr11[i]>sum1){
            sum1=arr11[i];
        }

        sum3+= arr11[i];
        

       }


   let maxSum=sum3-sum1;
   let minSum=sum3-sum2;
   maxArr=[maxSum,minSum]
   return sum1;
    }
   
   

console.log(miniMaxSum(arr11))

//----------------------------




 let candles=[6,2,15,4,15,1];

 function birthdayCakeCandles(candles) {
    // Write your code here

    let hightCandles = candles[0];
    let countCandles=0;
    for (let i = 0;i<candles.length;i++) {
        if(hightCandles<candles[i]) {
            hightCandles=candles[i];
           
        }
        else if(hightCandles===candles[i]) {
                 countCandles++;
               
             }
        // if(hightCandles===candles[i]) {
        //     countCandles++;
           
        // }
     
    }

   return countCandles;


}

console.log(birthdayCakeCandles(candles))




//=-------------------------------------------- failed



// let s = "18:00:00AM";


// function timeConvesion(s) {
//     // Write your crode here
//      let controlAm= s.includes("AM")
//      let controlPm= s.includes("PM")

//    let checkIndexFirstDoublePoint =s.indexOf(":");
// let checkHour = s.substr(0,checkIndexFirstDoublePoint);
// checkHour = parseInt(checkHour);
// let checkMin= s.substr(checkIndexFirstDoublePoint+1,checkIndexFirstDoublePoint+3)
// checkMin=parseInt(checkMin);
// let checkSecond = s.substr(checkIndexFirstDoublePoint+3,checkIndexFirstDoublePoint+5)
// checkSecond = parseInt(checkSecond)
// let SetPm= checkHour + 12;
   
 
// if (controlPm==true && checkHour===12 ) {
//     checkHour=12;
    
// }
// else if (controlPm==true && checkHour !== 12) {
//     checkHour=SetPm;
   
// }
// else if (controlAm==true && checkHour===12) {
//     checkHour= "00";
    
    
// }
// checkHour=checkHour.toString()
// checkMin=checkMin.toString()
// checkSecond=checkSecond.toString()

// s = checkHour +":" + checkMin + ":" + checkSecond;
// return s;



// }
// console.log(timeConvesion(s));
 



var s = "05:05:45PM";
function timeConversion(s ) {
    var hour = parseInt(s .substr(0, 2));
    var minSec = s .substr(2, 6);
    var noChange = s .substr(0, 8);

    var period = s .substr(8, 2);

    if (period === "PM") {
        if (hour < 12) {
            hour = hour + 12;
            var newSaat = hour.toString();
            s  = newSaat + minSec;
        } else if (hour == 12) {
            s  =noChange;
        } else if (hour > 12) {
            s  =noChange;
        }
    } else {
        if (hour == 12) {
            s  ="00" + minSec;
        } else {
            s  =noChange;
        }
    }
    return s ;
}
console.log(timeConversion(s ))



//------------------------------------

// let grades= 78;
// function gradingStudents(grades) {
//     let remainder = grades % 5;
//     // Write your code here
// if ( grades < 38) {
//     grades= grades;
// }
// else if (grades >= 38 && remainder === 3 || remainder === 8) {
//         grades +=2;
// }
// return grades;
// }

// console.log(gradingStudents(grades))


///------------------------------


// function gradingStudents(grades) {
    
//     // Write your code here
    
//     for (let j=0;j<=studentAmount;j++) {
    
//     for(let i=0;i<=studentAmount;i++){
//         var remainder = grades[i] % 5;
// if ( grades[i] < 38) {
//     grades[i]= grades[i];
// }
// else if (grades[i] >= 38 && remainder === 3) {
//         grades[i] = grades[i]+2;
// }

//     }
//     return grades;
//     }

// }


// console.log(gradingStudents(grades))






let grades= [56,78,48,47,54,58];

function gradingStudents(grades) {
    
    // Write your code here
    
    
    
    for(let i=0;i<=grades.length;i++){
        var remainder = grades[i] % 5;



if (grades[i] >= 38 && remainder >= 3) {
        grades[i] += 5-remainder;
}

    
    
    }
    return grades;
}

console.log(gradingStudents(grades))


//------------------------------------

let arr1= [1, 2 ,3, 4 ,5 ,4, 3, 2, 1, 3, 4]

function migratoryBirds(arr) {
    // Write your code here
    let firstType = arr1[0];
    let secType= arr1[1];
    let firstResult = 0;
    let secResult = 0;
    let firstArray=[];


     for (let i=0;i<arr1.length;i++) {
        for ( let j = 0;j<arr1.length;j++){

            if ( arr1[i]==arr1[j] ) {
               firstArray=arr1.push(arr1[i]);
                

            }
        }
     }
return firstResult;
}

console.log(migratoryBirds(arr1))


//--------------------------------------------


function divisibleSumPairs( n,  k,  ar) {
    // Write your code here
let result = 0;

for (let  i = 0; i<ar.length-1;i++) {
    for (let  j=i+1;j<ar.length;j++) {
        if ((ar[i]+ar[j])%k==0) {
            result++;
        }
    }
}
return result;

    }


//-------------------------------



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


//------------------


if (grades[i] >= 38 && remainder >= 3) {
        grades[i] += 5-remainder;
}

   
    
    return grades;
}

console.log(gradingStudents(grades))




//------------------------------------

let arr= [1, 2 ,3, 4 ,5 ,4, 3, 2, 1, 3, 4]

function migratoryBirds(arr) {
    // Write your code here
    let firstType = arr[0];
    let secType= arr[1];
    let firstResult = 0;
    let secResult = 0;
    let firstArray=[];


     for (let i=0;i<arr.length;i++) {
        for ( let j = 0;j<arr.length;j++){

            if ( arr[i]==arr[j] ) {
               firstArray=arr.push(arr[i]);
                

            }
        }
     }
return firstResult;
}

console.log(migratoryBirds(arr));








//------------------------------

let s1= "hello";
let s2="world";

function twoStrings(s1, s2) {
    // Write your code here
    
   
    
    for (let i=0;i<s1.length;i++) {
        for(let j=0;j<s2.length;j++) {
            if (s2.substring(j) == s1.substring(i)) {
                return "YES";
                break;
            }
            else {
                return "NO";
            }
        }
    }
    
    

}



