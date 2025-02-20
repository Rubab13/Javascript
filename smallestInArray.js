// A function that returns the smallest number of an array.

function smallestInArray (array) {
  if (array.length === 0) {
    console.log("There is no element in the array.");
    return;
  }

  if (array.length === 1) {
    console.log("The smallest number in the given array is", array[0]);
    return;
  }

  let min = array[0];
  for (let i=0; i<array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  console.log("The smallest number in the given array is", min);
}

smallestInArray([1, 2, 3, 4, 5]);
smallestInArray([]);
smallestInArray([8]);
smallestInArray([20, -1, 6, 800, 1000]);