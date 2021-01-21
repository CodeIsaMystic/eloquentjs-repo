"use strict";


/********************************************************************************************* 
 * 5.1 Flattening
 */
let arrays = [[1, 2, 3], [4, 5], [6]];
let flatArr = arrays.reduce((array1, array2) => array1.concat(array2));

/***********************************************************************************************
 * Tests
 * ********************************************************************************************/
console.log(flatArr);
// → [1, 2, 3, 4, 5, 6]





















/********************************************************************************************* 
 * 5.2 looping version
 * 
 * loop func
 * 
 * @param {value} number
 * @param {test} func 
 * @param {update} func 
 * @param {body} func 
 * 
 */
function loop(value, test, update, body) {
  for (let i = value; test(i); i = update(i)) {
    body(i)
  }
}

/***********************************************************************************************
 * Tests
 * ********************************************************************************************/
loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1



















/********************************************************************************************* 
 * 5.3 Everything
 *  => every using a loop 
 * every func
 * 
 * @param {array} array
 * @param {test} func 
 * @return {boolean}
 */
function every(array, test) {
  for (let element of array) {
    if (test(element) === false) {
      return false;
    }
  }
  return true;
}

/***********************************************************************************************
 * Tests
 * ********************************************************************************************/
console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true



/**
 * version using array.some()
 */
function every(array, test) {
  return array.some(test);
}

/***********************************************************************************************
 * Tests
 * ********************************************************************************************/
console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true






















/**
 * 5.4 Dominant Writing Direction
 *  
 * characterScript func
 * 
 * @param {*} code 
 */
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => code >= from &&
      code < to)) {
      return script;
    }
  }
  return null;
}

/**
 * countBy func
 * 
 * @param {*} items 
 * @param {*} groupName 
 */
function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

/**
 * dominantDirection func
 * 
 * @param {*} text 
 */
function dominantDirection(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({ name }) => name != "none");
  switch (scripts.length) {
    case 0:
      return 'no dominant direction found';
    case 1:
      return scripts[0].name;
    default:
      if (scripts.reduce((acc, cur) => acc.count === cur.count)) {
        return 'no dominant direction found';
      } else {
        return scripts.reduce((acc, cur) => acc.count >= cur.count ? acc.name : cur.name);
      }
  }
}

/***********************************************************************************************
 * Tests
 * ********************************************************************************************/
console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
console.log(dominantDirection(""));
// → no dominant direction found
console.log(dominantDirection("Heyخير"));
// → no dominant direction found
console.log(dominantDirection('英国的狗说"woof", 俄罗斯的狗说"тяв"'));












