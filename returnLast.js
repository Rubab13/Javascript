// function that returns the last element of an array

function returnLast (array) {
  return array[array.length - 1];
}

console.log(returnLast([1, 2, 3, 4, 5]));
console.log(returnLast([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(returnLast([-1, -2, -6, 10, 0]));