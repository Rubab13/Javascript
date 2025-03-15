// Write a function that finds all pairs in an array that add up to a given sum.

// Example:
// Input: ([1, 2, 3, 4, 5, 6], 7)
// Output: [[1, 6], [2, 5], [3, 4]]

function findSumPairs (array, target) {
  if (array.length === 0) {
    return [];
  }
  let result = [];
  for (let i=0; i<array.length-1; i++) {
    for (let j=i+1; j<array.length; j++) {
      if (array[i] + array[j] === target) {
        result.push([array[i], array[j]]);
      }
    }
  }
  return result;
}

console.log(findSumPairs([1, 2, 3, 4, 5, 6], 7));
console.log(findSumPairs([1, 2, 3, 4, 5, 6], 10));
console.log(findSumPairs([1, 2], 7));
console.log(findSumPairs([1, 2, 3, 4, 5, 6], 3));
console.log(findSumPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 13));