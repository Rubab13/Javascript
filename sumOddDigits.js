// Sum of Odd Numbers
// Write a function that takes a number n and returns the sum of the first n odd numbers.

function sumOddNumbers (number) {
  let count = 0;
  let sum = 0;
  let num = 1;

  while (count < number) {
    sum = sum + num;
    num = num + 2;      
    count++;
  }
  
  return sum;
}

console.log("4 ->", sumOddNumbers(4));   // 1+3+5+7=16
console.log("5 ->", sumOddNumbers(5));
console.log("10 ->", sumOddNumbers(10));