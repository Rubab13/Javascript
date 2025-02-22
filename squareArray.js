// A function that squares all the elements of an array.

function square (array) {
  array = array.map(
    element => element * element
  );
  return array;
}

console.log("[1, 2, 3, 4] ->", square([1, 2, 3, 4]));
console.log("[10] ->", square([10]));
console.log("[] ->", square([]));
console.log("[10, 20, 30, 40, 50] ->", square([10, 20, 30, 40, 50]));