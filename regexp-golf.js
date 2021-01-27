// Fill in the regular expressions 


// the letters 'ca' followed by one of 'r' or 't'
verify(/ca[rt]/,
  ["my car", "bad cats"],
  ["camper", "high art"]);


// 'p' optionally followed by 'r' followed by 'op'
verify(/pr?op/,
  ["pop culture", "mad props"],
  ["plop", "prrrop"]);


// 'ferr' followed by 'et' or 'y' or 'ari'
verify(/ferr(et|y|ari)/,
  ["ferret", "ferry", "ferrari"],
  ["ferrum", "transfer A"]);


// 'ious' followed by a word boundary 
verify(/ious\b/,
  ["how delicious", "spacious room"],
  ["ruinous", "consciousness"]);


// a whitespace character followed by one of '.' or ',' or ':'or ';'
verify(/\s[.,;:]/,
  ["bad punctuation .", "kfksk . ;"],
  ["escape the period"]);


// 7 or more word characters grouped together
verify(/\w{7}/,
  ["Soziorjoifjsofizknvksjofiqajpsqjfpjfpjok", "ejfgetr"],
  ["no", "three small words", "jerte jebfgs "]);



// one or more words not containing an e
verify(/\b[^\We]+\b/i,
  ["red platiypus", "wobbling nest", "happy", "hello jungle"],
  ["earth bed", "learning ape", "BEET", "poops"]);




function verify(regexp, yes, no) {
  /* Ignore unfinished exercises */
  if (regexp.source == "...") return;

  for (let str of yes) if (!regexp.test(str)) {
    console.log(`Failure to match '${str}'`);
  }
  for (let str of no) if (regexp.test(str)) {
    console.log(`Unexpected match for '${str}'`);
  }
}



let re = /\b[^\We]+\b/;
console.log("red platypus".match(re));
console.log("wobbling nest".match(re));
console.log("earth bed".match(re));
console.log("learning ape".match(re));
console.log("hello jungle".match(re));
console.log("happy".match(re));
