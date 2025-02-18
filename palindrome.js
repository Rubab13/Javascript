// Check for Palindrome

let string = "moon";
reverse = ""

for (let i = 0; i < string.length; i++) {
  reverse = string[i] + reverse;
}

console.log(string === reverse ? "The string is a palindrome.": "The string is not a palindrome.");