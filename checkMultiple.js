// Check if Number is Multiple of 3 or 7
// Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.

function checkMultiple (number) {
  if (number < 0) {
    return "The number should be positive.";
  }

  return number%3===0 && number%7===0 ? `The number ${number} is a multiple of both 3 and 7.` : number%3===0 && !number%7===0 ? `The number ${number} is a multiple of 3.` : !number%3===0 && number%7===0 ? `The number ${number} is a multiple of 7.` : `The number ${number} is neither a multiple of 7, nor 3.`;
}

console.log(checkMultiple(21));
console.log(checkMultiple(22));
console.log(checkMultiple(-900));
console.log(checkMultiple(0));
console.log(checkMultiple(35));