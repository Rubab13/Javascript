// A function that checks whether a word exists in a sentence or not.

function checkWordInSentence (word, sentence) {
  let array = sentence.split(" ");
  return array.includes(word);
}

console.log(checkWordInSentence("file", "You can name the file something meaningful and descriptive") ? `Yes, the word is included in the sentence.`: "No, the word is not present in the sentence.");

console.log(checkWordInSentence("file", "This will result in an error") ? `Yes, the word is included in the sentence.`: "No, the word is not present in the sentence.");

console.log(checkWordInSentence("likewise", "If it's part of a bigger project, you can also name it based on the module") ? `Yes, the word is included in the sentence.`: "No, the word is not present in the sentence.");