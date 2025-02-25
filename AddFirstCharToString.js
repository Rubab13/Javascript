// Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.

function addFirstCharToString (string) {
  return string !== "" ? string[0] + string + string[0] : "";
}

console.log(`abcd -> ${addFirstCharToString("abcd")}`);
console.log(addFirstCharToString("hello"));
console.log(addFirstCharToString("abcjhsdyhjsfhn"));
console.log(addFirstCharToString("x"));     // "xxx"
console.log(addFirstCharToString(""));      // ""