/****************************************************/
var counter = 1;


/***************************************************/
mathMin(2, 3);
mathMin(2, -3);
mathMin(-0, "aa");
mathMin("0", "aa");
mathMin("aa", 0);


/*************************************************/

/**
 * mathMin function 
 *
 * @params x & y  number
 *
 * @return counter number 
**/
function mathMin(x, y) {
  console.log(`Call ${counter}`)

  if (typeof x === 'number' && typeof y === 'number') {
    console.log(typeof x, typeof y)
    console.log("YEAH the min is...  " + Math.min(x, y));
  } else {
    console.log("Check inputs, it need to be two Numbers!")
    messageTypeError(x, y);
  }

  return counter++;
}

/**
 * messageTypeError function 
 *
 * @params v1 & v2  number
 *
 * @return  string 
**/
function messageTypeError(v1, v2) {
  if (typeof v1 !== 'number') {
    console.log("The first input must be a Number! Please check it...")
    if (typeof v2 !== 'number') {
      console.log("The Second input also must be a Number...")
    }
  }
  else if (typeof v2 !== 'number') {
    console.log("The Second input must be a Number! Please check it...")
  }
  else {
    console.log("There is something wrong here ?..")
  }
}


