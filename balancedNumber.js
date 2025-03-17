// Write a function that takes a number as input and returns true if the number is a "balanced number" and false otherwise. A balanced number is a number where the sum of the digits in the first half is equal to the sum of the digits in the second half.

// Assume the number always has an even number of digits.
function balancedNumber(number) {
  let numString = number.toString();
  let first = numString.substring(0, numString.length / 2);
  let second = numString.substring(numString.length / 2);

  let firstSum = 0;
  let secondSum = 0;

  for (let i = 0; i < first.length; i++) {
    firstSum += Number(first[i]);
  }

  for (let j = 0; j < second.length; j++) {
    secondSum += Number(second[j]);
  }

  return firstSum === secondSum;
}

console.log("1230 ->", balancedNumber(1230));  // true
console.log("2468 ->", balancedNumber(2468));  // false
console.log("112233 ->", balancedNumber(112233)); // true
