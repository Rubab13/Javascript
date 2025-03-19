// Mirror the Digits
// Write a function that takes a number as input and returns the reverse of its digits as a number.

function reverse (number) {
  let result = "";
  while (number > 0) {
    let remainder = number % 10;
    result = result + remainder;
    number = Math.floor(number / 10);
  }
  return Number(result);
}

function reverse2 (number) {
  let result = 0;
  while (number > 0) {
    let remainder = number % 10;
    result = result * 10 + remainder;
    number = Math.floor(number / 10);
  }
  return result;
}

console.log("1234 ->", reverse(1234), "\tType:", typeof(reverse(1234)));
console.log("1234 ->", reverse2(1234), "\tType:", typeof(reverse2(1234)));