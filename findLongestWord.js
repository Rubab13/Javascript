// Find the Longest Word in a Sentence

function findLongestWord(string) {
  let list = string.split(" ");
  let max = 0;
  let index = 0;

  for (let i = 0; i < list.length; i++) {
    if (list[i].length > max) {
      max = list[i].length;
      index = i;  // Update the index of the longest word
    }
  }

  return list[index]; // Return the longest word
}

console.log("The longest word in the given string is:", findLongestWord("The lazj foxsd"));