"use strict";


/**
 * The sum of a Range
 * 
 * console.log(Sum(Range(1, 10)));
 */


//*******************************************
/**
 *   Range function   
 * 
 * @param start (number)
 * @param end (number)
 * @return arr (array)
 */
function range(start, end) {
  let arr = [];

  for (let i = start; i <= end; i++) {
    if (i !== end) arr += i + ",";
    else arr += i
    //console.log(typeof ( i ));
    arr = arr.split(",").map(Number);
  }
  //console.log(typeof ( arr ));   
  return arr;
}



/* function range(start, end) {
  let arr = [];

   for (let i = start; i < end; i++) {        
     //arr += i;
     
     arr[i] = arr.push(i);
     // WHY IS THAT ????
     //console.log(typeof ( i ));
   }
   //console.log(typeof ( arr ));   
   return arr;
 }
 */




/**  function sum()  
  * 
  * @param arr (array)
  *
  * @return result (number)
  */
function sum(arr) {
  let result = 0;

  arr.forEach((num) => {
    result += num;
    //console.log("Number : ", num, "============result: ", result);
  })
  return result;
}



//*********************************************
// range(1, 10); 
// range(15, 100);
// range(1.2, 104.7); 
// *********************************************
//console.log("The final result IS: ", sum([ 1, 2, 3, 4, 5 ]));
//console.log("The final result IS: ", sum([ 8, 5, 1, 85 ]));
//sum(range(1, 10));
// range(1, 10);





