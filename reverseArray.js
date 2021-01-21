"use strict";

/ **********************************************
/**
 * function reverseArray()
 * @param arr (array)
 * @return newArr (array) */
/* function reverseArray(arr) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.unshift(arr[i]);
  }
  return newArr;
}
 */

/*****************************************
 * function reverseArray2()
 * @param arr (array) */
const newArr2 = [];

//const reverseArray2 = (arr) => newArr2 = arr.reverse();
//const reverseArray2 = (arr) => console.log(arr.reverse());









/*************************************************************** */
function reverseArrayInPlace(arr) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.unshift(arr[i]);
  }
  return console.log(newArr);
}






/***************************************************************** */
/**
 * function reverseArrayInPlace()
 *
 * @return newArr (array) */

function reverseArrayInPlace(arr) {
  // assigning & copying arr to newArr
  var newArr = arr; // arr.slice(0)

  /* MultiplyBy2(copying reversed arr) to handle odd & even, 
   * then cut the arr in the middle with slice()
   *
   *    push() reversed array  */
  for (let i = arr.length - 1; i >= 0; i--) {
    arr.push(arr[i]);
  }
  // slice() cut the Array on the middle length
  arr = arr.slice(arr.length / 2);

  return arr;
}
/* Without copying reversed arr 
   *
   *    push() reversed array in newArr = [];  */
function reverseArrayInPlace(arr) {
  const newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  // slice() cut the Array on the middle length
  arr = arr.slice(arr.length / 2);

  return newArr;
}













// **********************************************
// reverseArray([1, 2, 3, 4, 5, 6]);
// reverseArray(['Code', 'Isa', 'Mystic']);
// *********************************************
// reverseArray2([1, 2, 3, 4, 5, 6]);
// reverseArray2(['Code', 'Isa', 'Mystic']);
// *********************************************
reverseArrayInPlace([1, 2, 3, 4, 5, 6]);
reverseArrayInPlace(['Code', 'Isa', 'Mystic']);
reverseArrayInPlace(['Code', 'Isa', 'Mystic', 'Trully']);

