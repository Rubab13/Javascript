// Remove Duplicates from an Array

function removeDuplicates(arr) {
  let array = arr;
  let newArray = [];

  for (let i=0; i < array.length; i++) {
    if (!newArray.includes(array[i])) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]