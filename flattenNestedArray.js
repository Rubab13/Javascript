// Flatten a Nested Array

function flattenNestedArray (array, depth) {
  return array.flat(depth);
}

console.log(flattenNestedArray([1, [2, 3], [4, [5, 6]], 7], 1));   // [1, 2, 3, 4, 5, 6, 7]
console.log(flattenNestedArray([1, [2, 3], [4, [5, 6]], 7], Infinity));   // [1, 2, 3, 4, 5, 6, 7]
