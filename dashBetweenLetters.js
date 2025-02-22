// A function that adds a dash ("-") after each letter of a string.

function dashBetweenLetters (string) {
  if (string.length === 0) {
    return "Empty String"
  }
  let newString = "";
  for (let i=0; i<string.length; i++) {
    newString = newString + string[i] + "-";
  }
  return newString;
}

console.log("rubab ->", dashBetweenLetters("rubab"));    //r-u-b-a-b-
console.log("likewise ->", dashBetweenLetters("likewise"));
console.log("'' ->", dashBetweenLetters(""));
console.log("pandas ->", dashBetweenLetters("pandas"));