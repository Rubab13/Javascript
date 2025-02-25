// Sum of Digits
// sumOfDigits(1234); // Output: 10 (1+2+3+4)
// sumOfDigits(987); // Output: 24 (9+8+7)

// Method 1
function sumOfDigits1 (number) {
  let num = number.toString();
  let sum = 0;
  for (let i=0; i<num.length; i++) {
    sum = sum + parseInt(num[i]);
  }
  return sum;
}

console.log(`The sum of digits of the number 1234 is `, sumOfDigits1(1234));
console.log(`The sum of digits of the number 987 is `, sumOfDigits1(987));

// Method 2
function sumOfDigits2 (number) {
  let sum = 0;
  while (number > 0) {
    let remainder = number % 10;
    sum = sum + remainder;
    number = Math.floor(number / 10);
  }
  return sum;
}

// 1234 / 10 = 123 and the remainder is 4.
// 123 / 10 = 12 and the remainder is 3.
// 12 / 10 = 1 and the remainder is 2.
// 1 / 10 = 0 and the remainder is 1.

console.log(`The sum of digits of the number 1234 is `, sumOfDigits2(1234));
console.log(`The sum of digits of the number 987 is `, sumOfDigits2(987));