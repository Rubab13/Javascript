// Find the First Non-Repeating Character

// firstUniqueChar("aabbccddefg"); // Output: "e"
// firstUniqueChar("aabb"); // Output: null

function firstUniqueChar(string) {
  if (!string) {
    return "The given string is empty.";
  }
  
  let charCount = {};

  // Count occurrences of each character
  for (let char of string) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first non-repeating character
  for (let char of string) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null; // If no unique character is found
}

console.log("aabbccddefg ->" + firstUniqueChar("aabbccddefg")); // Output: "e"
console.log("aabb ->" + firstUniqueChar("aabb")); // Output: null
console.log("'' ->" + firstUniqueChar("")); // Output: "The given string is empty."