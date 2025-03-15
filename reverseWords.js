// Write a function that takes a sentence and reverses the order of words.

function reverseWords (string) {
  return string.split(" ").reverse().join(" ");
}

console.log("Hello World! ->", reverseWords("Hello World!"));
console.log("Any separator can be specified. ->", reverseWords("Any separator can be specified."));
console.log("Shortest String to Convert into Palindrome ->", reverseWords("Shortest String to Convert into Palindrome"));
