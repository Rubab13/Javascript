// Function to concatenate an array without using the join() method

function arrayToString (array) {
  if (array.length === 0) {
    console.log("Empty array");
    return null;
  }

  let string = "";
  for (let i=0; i<array.length; i++) {
    string = string + array[i];
  }
  return string;
}

console.log("[1, 2, 3, 4, 5] ->", arrayToString([1, 2, 3, 4, 5]));
console.log("[] ->", arrayToString([]));
console.log("[99, 88, 77, 66, 55, 44, 33, 22, 11] ->", arrayToString([99, 88, 77, 66, 55, 44, 33, 22, 11]));
console.log("[2345, 243, 456, 234, 2, 35, 57, 5, 57, 23] ->", arrayToString([99, 88, 77, 66, 55, 44, 33, 22, 11]));