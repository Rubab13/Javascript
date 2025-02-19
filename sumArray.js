// Sum of All Numbers in an Array

function sumArrayNumbers (array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;

}

console.log("The sum of all numbers in the given array is", sumArrayNumbers([1, 2, 3, 4, 5]), "."); // 15