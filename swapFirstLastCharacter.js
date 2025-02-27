// Swap First and Last Characters in String
// Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1.

function  swapFirstLastCharacter (string) {
  if (string.length === 0) {
    return "Invalid String.";
  }

  let first = string[0];
  let last = string[string.length - 1];
  let result = last + string.substring(1, string.length - 1);
  result = result + first;
  return result;
}

console.log("rubab ->", swapFirstLastCharacter("rubab"));
console.log("'' ->", swapFirstLastCharacter(""));
console.log("likewise ->", swapFirstLastCharacter("likewise"));
console.log("nice ->", swapFirstLastCharacter("nice"));