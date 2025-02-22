// A function that returns a reverse copy of an array (the original does not change).

function getReversedArray (array) {
  if (array.length === 0) {
    console.log("Empty array");
    return null
  }
  let newArray = [];
  for (let i=array.length-1; i>=0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

let array1 = [1, 2, 3, 4, 5, 6, 7];
console.log(array1, "->", getReversedArray(array1));

let array2 = [];
console.log(array2, "->", getReversedArray(array2));

let array3 = [10, 20, 37, 5, 0, 99];
console.log(array3, "->", getReversedArray(array3));