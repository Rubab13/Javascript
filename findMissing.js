// Find the Missing Number in an Array

function findMissingNumber(arr) {
  // Check if array is too small
  if (arr.length < 2) {
    console.log("The array should be of size 2 or greater.");
    return null;
  }

  for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
    if (!arr.includes(i)) {
      return i;
    }
  }

  return null; // No missing number found
}

console.log(findMissingNumber([1, 2, 3, 5])); // Output: 4