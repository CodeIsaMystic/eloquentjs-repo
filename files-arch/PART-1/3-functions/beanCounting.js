var str = "Helloooo!";
var str2 = str[str.length - 1];
var strTest = "Banner be Rob CLUB by oncleBob";

// str[0];
// str[str.length -1];
// console.log(str, str2);


/** Function countBs()
 *
 * @param str (string)  => string value to analysis 
 * @return num (number) => number of B uppercase */
function countBs(str, char) {
  var counter = 0;

  Array.from(str).forEach(el => { if (el == char) counter++ });

  return counter;
}


countBs(strTest, "b");


/** Function countChar()
 *
 * @param str (string)  => string value to analysis 
 * @param char (string) => char as string
 * @return result (string) => values pushed after analysis */
function countChar(str, char) {
  var result = [];
  Array.from(str).forEach(el => { if (el == char) result.push(char) });

  return result.join('');
}
countChar(strTest, "b");














