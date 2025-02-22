// A function that returns the shortest word of a sentence.

function findShortestWord (string) {
  if (string.length === 0) {
    console.log("Invalid sentence input");
    return null;
  }

  let array = string.split(" ");
  let shortestWord = array[0];
  for (let i=1; i<array.length; i++) {
    if (array[i].length < shortestWord.length) {
      shortestWord = array[i];
    }
  }
  return shortestWord;
}

console.log(findShortestWord("The cat is sleeping under the tree"));
console.log(findShortestWord("I love coding in JavaScript"));
console.log(findShortestWord(""));