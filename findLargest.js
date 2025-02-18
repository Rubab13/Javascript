let array = [1, 2, 3, 4, 5, 6, 7]
let max = array[0];

for (let i = 1; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
  }
}

console.log("The largest number in the given array is " + max + ".")