

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

let arr1=[6,2,12,4,5,1];


let sum3= 0 ;
let maxSum=0;
let minSum=0;
let minArr=[];
let maxArr = [];
let i = 0;

function miniMaxSum(arr1) {
    // Write your code here

    let sum2 = arr1[0];
    let sum1 = arr1[0];
    for(;i<arr1.length;i++) {
        
        if(arr1[i]<sum2){
            sum2=arr1[i];
        }

        if(arr1[i]>sum1){
            sum1=arr1[i];
        }

        sum3+= arr1[i];
        

       }


   let maxSum=sum3-sum1;
   let minSum=sum3-sum2;
   maxArr=[maxSum,minSum]
   return sum1;
    }
   
   

console.log(miniMaxSum(arr1))

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



let s = "18:00:00AM";


function timeConvesion(s) {
    // Write your crode here
     let controlAm= s.includes("AM")
     let controlPm= s.includes("PM")

   let checkIndexFirstDoublePoint =s.indexOf(":");
let checkHour = s.substr(0,checkIndexFirstDoublePoint);
checkHour = parseInt(checkHour);
let checkMin= s.substr(checkIndexFirstDoublePoint+1,checkIndexFirstDoublePoint+3)
checkMin=parseInt(checkMin);
let checkSecond = s.substr(checkIndexFirstDoublePoint+3,checkIndexFirstDoublePoint+5)
checkSecond = parseInt(checkSecond)
let SetPm= checkHour + 12;
   
 
if (controlPm==true && checkHour===12 ) {
    checkHour=12;
    
}
else if (controlPm==true && checkHour !== 12) {
    checkHour=SetPm;
   
}
else if (controlAm==true && checkHour===12) {
    checkHour= 00;
    
    
}
checkHour=checkHour.toString()
checkMin=checkMin.toString()
checkSecond=checkSecond.toString()

s = checkHour +":" + checkMin + ":" + checkSecond;
return s;



}
console.log(timeConvesion(s));
 





//------------------------------------


1 <= n  <= 60;

0<= grades[i] <= 100;

let remainderNull = grades[i] % 5;


function remainderNull(grades) {
    // Write your code here
if ( grades < 38) {
    
}

}

