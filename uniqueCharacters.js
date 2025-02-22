// A function that returns only unique characters in a string.

function unique (string) {
  if (string.length === 0) {
    console.log("The string is empty. No unique characters.");
    return null;
  }

  let array = [];
  for (let i=0; i<string.length; i++) {
    let count = 0;
    for (let j=0; j<string.length; j++) {
      if (string[i] === string[j]) {
        count++;
      }
    }
    if (count === 1) {
      array.push(string[i]);
    }
  }
  return array;
}

console.log(unique("rubab"));  // answer should be r u a. (b is not included bcz it isn't unique.)
console.log(unique("abcdefghiiiiiiiiiiiiiiiiiiiiii"));
console.log(unique(""));
console.log(unique("likewise"));