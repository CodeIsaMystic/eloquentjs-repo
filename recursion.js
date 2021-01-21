function isEven(number, msg) {
  if (number < 0) return isEven(-number)
  else if (number == 0) return msg = "Cool, it's an even num!";
  else if (number == 1) return msg = "Oops, it's an odd num!";
  else return isEven(number - 2);
}

console.log(isEven(-1));
console.log(isEven(-127));
console.log(isEven(-0));
console.log(isEven(10));
console.log(isEven(15));

