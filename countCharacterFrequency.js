// Count Character Frequency

// charFrequency("hello"); 
// // Output: { h: 1, e: 1, l: 2, o: 1 }

function charFrequency (string) {
  if (!string) {
    return "The given string is empty.";
  }

  let charCount = {};
  for (let char of string) {
    charCount[char] = (charCount[char] || 0) + 1;;
  }

  return charCount;
}

console.log("hello->", charFrequency("hello"));
console.log("rubab->", charFrequency("rubab"));
console.log("likewise->", charFrequency("likewise"));
console.log("''->", charFrequency(""));