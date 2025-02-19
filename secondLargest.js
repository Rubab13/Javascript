// Find the Second Largest Number in an Array

function findSecondlargest (array) {
  if (array.length === 1) {
    console.log("The array should be of size 2 or greater.");
    return null;
  }

  let max = array[0];
  let secondMax = array[1];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      secondMax = max;
      max = array[i];
    }
  }

  return secondMax;
}

console.log("The second largest number in the given array is", findSecondlargest([1, 2, 3, 4, 5]), "."); // 4