// Reverse an integer

function integerReverse (number) {
  if (number === 0) {
    return 0;
  }
  let string = ''
  while (number > 0) {
    let remainder = number % 10;
    string = string + remainder;
    number = Math.floor(number / 10);
  }
  return parseInt(string);
}

console.log(`Reverse of 1234 is ${integerReverse(1234)}.`);
console.log(`Reverse of 99999 is ${integerReverse(9999)}.`);
console.log(`Reverse of 0 is ${integerReverse(0)}.`);
console.log(`Reverse of 298347723 is ${integerReverse(298347723)}.`);
console.log(`Reverse of 1 is ${integerReverse(1)}.`);