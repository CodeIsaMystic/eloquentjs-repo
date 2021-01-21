"use strict";


/*********************************************************************************************
 * deepEqual func
 * 
 * @param {*} a 
 * @param {*} b 
 */
function deepEqual(a, b) {
  if (a === b) {
    // items are identical
    return true;
  } else if (typeof a === 'object' && a !== null && typeof b === 'object' && b !== null) {
    // items are objects - do a deep property value compare
    // join keys from both objects together in one array
    let keys = Object.keys(a).concat(Object.keys(b));
    // filter out duplicate keys
    keys = keys.filter(
      function (value, index, self) {
        return self.indexOf(value) === index;
      }
    );
    for (prop of keys) {
      if (typeof a[prop] === 'object' && typeof b[prop] === 'object') {
        if (deepEqual(a[prop], b[prop]) === false) {
          return false;
        }
      } else if (a[prop] !== b[prop]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

/***********************************************************************************************
 * Tests
 * ********************************************************************************************/
let obj = { here: { is: "an" }, object: 2 };


console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true
console.log(deepEqual(obj, { here: { is: "an" }, object: 0 }));
// → false
console.log(deepEqual(obj, { here: { is: "another" }, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { isnt: "an" }, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an", deep: { poop: null, value: -1 } }, object: 2 }));
// → false

/***********************************************************************************************
 * ********************************************************************************************/
let json = '{"candidate": "John Doe", "job": "Junior JavaScript Developer", "portfolio": "john.doe.me", "skills": ["HTML", "CSS", "JavaScript", "ES6", "Node", "React", "Git", "UX", "Responsive Design", "Design Patterns", "TDD", "Chrome Inspector", "Agile", "SEO", "Analytics", "WordPress", "Databases"], "contact": [{"email": "mailto:john@doe.me"}, {"github": "github.com/johndoe"}, {"linkedin": "linkedin.com/in/johndoe"}, {"mobile": "tel:+99-0000-000-000"}, {"skype": "skype:johndoe"}, {"twitter": "twitter.com/johndoe"}]}';
let json2 = '{"candidate": "John Doe", "job": "Junior JavaScript Developer", "portfolio": "john.doe.me", "skills": ["HTML", "CSS", "JavaScript", "ES6", "Node", "React", "Git", "UX", "Responsive Design", "Design Patterns", "TDD", "Chrome Inspector", "Agile", "SEO", "Analytics", "WordPress", "Databases2"], "contact": [{"email": "mailto:john@doe.me"}, {"github": "github.com/johndoe"}, {"linkedin": "linkedin.com/in/johndoe"}, {"mobile": "tel:+99-0000-000-000"}, {"skype": "skype:johndoe", {"twitter2": "twitter.com/johndoe2"}]}';

let jsonObj = JSON.parse(json);
let jsonObjCopy = JSON.parse(JSON.stringify(jsonObj));
let jsonObj2 = JSON.parse(json2);


console.log(jsonObj);
console.log(deepEqual(jsonObj, jsonObj));
// → true
console.log(deepEqual(jsonObj, jsonObjCopy));
// → true
console.log(deepEqual(jsonObj, jsonObj2));
// → false



/***********************************************************************************************
 * ********************************************************************************************/
console.log(deepEqual(null, obj));
// → false
console.log(deepEqual(obj, null));
// → false
console.log(deepEqual(null, null));
// → true


