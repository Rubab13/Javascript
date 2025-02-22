// A function that swaps only the first and last words of a sentence.

function swapFirstLastWord (string) {
  let array = string.split(" ");
  let first = array[0];
  array[0] = array[array.length-1];
  array[array.length-1] = first;
  return array.join(" ");
}

console.log("A function that swaps only the first and last words of a sentence ->", swapFirstLastWord("A function that swaps only the first and last words of a sentence"));

console.log("The cat is sleeping under the tree ->", swapFirstLastWord("The cat is sleeping under the tree"));

console.log("I love coding in JavaScript ->", swapFirstLastWord("I love coding in JavaScript"));