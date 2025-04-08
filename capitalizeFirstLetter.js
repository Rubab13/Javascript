// Write a function that takes a string as input and returns the same string but with the first letter capitalized.

function capitalizeFirstLetter (string) {
  return string ? string[0].toUpperCase() + string.substring(1,string.length) : null;
}

console.log(capitalizeFirstLetter("rubab"));
console.log(capitalizeFirstLetter(""));   // null means that no input is passed to the function.