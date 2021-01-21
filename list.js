"use strict";


/**
 *   arrayToList function
 * 
 * @param {array} array 
 * @return {result} obj
 */
function arrayToList(array) {
  let result = {};
  if (Array.isArray(array)) {
    let currListItem = result;
    for (let item of array) {
      let newListItem = {
        value: item,
        rest: null
      };
      if (typeof currListItem.rest === 'undefined') {
        result = newListItem;
      } else {
        currListItem.rest = newListItem;
      }
      currListItem = newListItem;
    }
  }
  return result;
}

/************************************************************* */
/**  tests  **/
console.log(arrayToList());
console.table(arrayToList());

console.log(arrayToList([10, 20]));
console.table(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}

console.log(arrayToList([4, 3, 2, 1]));
console.table(arrayToList([4, 3, 2, 1]));
// → {value: 4, rest: {value: 3, rest: {value: 2, rest: {value: 1, rest: null}}}}




/********************************************************************
 *   listToArray function
 * 
 * @param {list} array 
 * @return {result} array
 */
function listToArray(list) {
  let result = [];
  if (typeof list === 'undefined' || list.value === undefined || list.rest === undefined) {
    return result;
  } else {
    result.push(list.value);
    while (list.hasOwnProperty('rest') && list.rest !== null) {
      list = list.rest;
      if (list.hasOwnProperty('value')) {
        result.push(list.value);
      }
    }
  }
  return result;
}



/************************************************************* */
/**  tests  **/
console.log(listToArray());
// → []
console.log(listToArray(arrayToList([10, 20, 30])));
console.table(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(listToArray({ value: 10, rest: { xxx: 20, yyy: null } }));
console.table(listToArray({ value: 10, rest: { xxx: 20, yyy: null } }));
// → [10]
console.log(listToArray({ value: 10, rest: { value: 20, yyy: null } }));
console.table(listToArray({ value: 10, rest: { value: 20, yyy: null } }));
// → [10, 20]
console.log(listToArray({ value: 10, rest: { xxx: 20, rest: null } }));
console.table(listToArray({ value: 10, rest: { xxx: 20, rest: null } }));
// → [10]








/**********************************************************************
 * ********************************************************************
 * ********************************************************************
 *   prepend function
 * 
 * @param {element} array 
 * @param {list} array 
 * @return {} obj
 */
function prepend(element, list) {
  return {
    value: element,
    rest: list
  };
}




/********************************************************************
 *   nth function
 * 
 * @param {list} array 
 * @param {number} number 
 *
 */
function nth(list, number) {
  return listToArray(list)[number];
}





/********************************************************************
 *   nthRecursive function  => nth recursive version
 * 
 * @param {list} array 
 * @param {number} number 
 */
function nthRecursive(list, number) {
  if (number === 0) {
    return list.value;
  } else if (list.rest === null) {
    return undefined;
  } else {
    return nthRecursive(list.rest, number - 1);
  }
}






/************************************************************* */
/************************************************************* */
/**  tests  **/
console.log(prepend(10, prepend(20, null)));
console.table(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
console.log(nth(arrayToList([10, 20, 30]), 3));
// → undefined
console.log(nth(arrayToList([10, 20, 30]), -2));
// → undefined
console.log(nthRecursive(arrayToList([10, 20, 30]), 1));
// → 20
console.log(nthRecursive(arrayToList([10, 20, 30]), 3));
// → undefined
console.log(nthRecursive(arrayToList([10, 20, 30]), -2));
// → undefined


















/**********************************************************************
 * ********************************************************************
 * ********************************************************************
 *       ===>  now with the help of the hints...
 *    arrayToListWithHints function
 *
 * @param {array} array
 * @return {} obj
 */
function arrayToListWithHints(array) {
  let result = {};
  if (Array.isArray(array)) {
    let list = null;
    array = array.reverse();
    for (let item of array) {
      list = {
        value: item,
        rest: list
      };
    }
    result = list;
  }
  return result;
}




/********************************************************************
 *   listToArrayWithHints function 
 * 
 * @param {list} array 
 * @return  {array} array 
 */
function listToArrayWithHints(list) {
  let result = [];
  if (typeof list === 'undefined' || list.value === undefined || list.rest === undefined) {
    return result;
  } else {
    for (let node = list; node; node = node.rest) {
      if (node.hasOwnProperty('value')) {
        result.push(node.value);
      }
    }
  }
  return result;
}



/************************************************************* */
/************************************************************* */
/**  tests  **/
console.log('\nWith Hints:');
console.log(arrayToListWithHints());
console.log(arrayToListWithHints([10, 20]));
console.table(arrayToListWithHints([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(arrayToListWithHints([4, 3, 2, 1]));
console.table(arrayToListWithHints([4, 3, 2, 1]));
// → {value: 4, rest: {value: 3, rest: {value: 2, rest: {value: 1, rest: null}}}}



/************************************************************* */
/************************************************************* */
console.log(listToArrayWithHints());
// → []
console.log(listToArrayWithHints(arrayToListWithHints([10, 20, 30])));
// → [10, 20, 30]
console.log(listToArrayWithHints({ value: 10, rest: { xxx: 20, yyy: null } }));
// → [10]
console.log(listToArrayWithHints({ value: 10, rest: { value: 20, yyy: null } }));
// → [10, 20]
console.log(listToArrayWithHints({ value: 10, rest: { xxx: 20, rest: null } }));
// → [10]
console.log(nth(arrayToListWithHints([10, 20, 30]), 1));
// → 20
console.log(nth(arrayToListWithHints([10, 20, 30]), 3));
// → undefined
console.log(nth(arrayToListWithHints([10, 20, 30]), -2));
// → undefined


