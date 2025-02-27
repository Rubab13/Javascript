// Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.

function removeCharacter (string, position) {
  if (string.length === 0) {
    return "Invalid string.";
  }

  if (position > string.length || position <= 0) {
    return "Invalid position.";
  }

  let result = "";
  for (let i=0; i<string.length; i++) {
    if (i === position - 1) {
      continue;
    }
    result = result + string[i];
  }
  return result;
}

console.log("rubab ->", removeCharacter("rubab", 4));
console.log("'' ->", removeCharacter("", 4));
console.log("abcdefghijklmnopqrstuvwxyz ->", removeCharacter("abcdefghijklmnopqrstuvwxyz", 13));
console.log("mango ->", removeCharacter("mango", 7));