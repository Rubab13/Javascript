// A function that returns only even numbers of an array.

function getEvenNumbers (array) {
  if (array.length === 0) {
    console.log("The array is empty. No even numbers.");
    return null;
  }

  let evenArray = [];
  for (let i=0; i<array.length; i++) {
    if (array[i] % 2 === 0) {
      evenArray.push(array[i]);
    }
  }
  return evenArray;
}

console.log("[1, 2, 3, 4, 5, 6, 7, 8, 9, 10] ->", getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log("[] ->", getEvenNumbers([]));
console.log("[2, 4, 6, 8, 10] ->", getEvenNumbers([2, 4, 6, 8, 10]));
console.log("[1, 3, 5, 7, 9] ->", getEvenNumbers([1, 3, 5, 7, 9]));