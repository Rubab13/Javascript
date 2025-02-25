// Write a function isLeapYear(year) that takes a year as input and returns true if it is a leap year, otherwise returns false.

function isLeapYear (year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  }
  else if (year % 100 === 0 && year % 400 === 0) {
    return true;
  }
  return false;
}

console.log(isLeapYear(1992) ? `The year ${1992} is a leap year.` : `The year ${1992} is not a leap year.`);
console.log(isLeapYear(2024) ? `The year ${2024} is a leap year.` : `The year ${2024} is not a leap year.`);
console.log(isLeapYear(1900) ? `The year ${1900} is a leap year.` : `The year ${1900} is not a leap year.`);
console.log(isLeapYear(2000) ? `The year ${2000} is a leap year.` : `The year ${2000} is not a leap year.`);
console.log(isLeapYear(2023) ? `The year ${2023} is a leap year.` : `The year ${2023} is not a leap year.`);