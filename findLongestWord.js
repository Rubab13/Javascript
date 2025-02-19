// Find the Longest Word in a Sentence


// this code is wrong

function findLongestWord (string) {
  // I am supposing here that all the words are of different lengths
  let list = string.split(" "); // This list contains all the words in the string
  let lengthArray = [];

  list.map(
    word => {
      lengthArray.push(word.length);
    }
  );
  console.log(lengthArray);
  
  // filter out the largest length
  let max = lengthArray[0];
  let index = 0;

  for (let i=0; i < lengthArray.length; i++) {
    if (max < lengthArray[i]) {
      max = lengthArray[i];
    }
  }  
  return list[index];
}

console.log("The longest word in the given string is", findLongestWord("The lazjhghghgsfy foxsd"));