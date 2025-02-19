// Count Words in a String

function countWords (string) {
  list = string.split(" ");
  return list.length;
}

console.log("The number of words in the given string is", countWords("The lazy fox slept all day."), ".");