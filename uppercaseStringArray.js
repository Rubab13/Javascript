// Convert string array to uppercase

let words = ["apple", "banana", "cherry"];

let result = words.map(
  (element) => {
    return element.toUpperCase();
  }
)

console.log(words, "->", result);