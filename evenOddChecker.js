// A function that checks whether a number is even or odd.

function checkNumber (number) {
  number%2 === 0 ? console.log(`The number ${number} is an even number.`) : console.log(`The number ${number} is an odd number.`);
}

checkNumber(2);
checkNumber(5);
checkNumber(33);
checkNumber(100);
checkNumber(0);