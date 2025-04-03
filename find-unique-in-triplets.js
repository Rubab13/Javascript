// You have an array of integers where every number appears three times except for one unique number that appears only once. Write a JavaScript function to find that unique number.

// The time complexity of this function is O(n^2)
function findUniqueInTriplets (array) {
  let element;
  for (let i=0; i<array.length; i++) {
    element = array[i];
    let count = 0;
    for (let j=0; j<array.length; j++) {
      if (element === array[j]) {
        count++;
      }
    }
    if (count !== 3) {
      return array[i];
    }
  }
}

const nums = [5, 7, 5, 5, 3, 3, 3];   // 7 is the unique number.
console.log("Result: " + findUniqueInTriplets(nums));