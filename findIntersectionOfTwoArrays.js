// Find Intersection of Two Arrays

function findIntersection (array1, array2) {
  let array = [];
  for (let i=0; i<array1.length; i++) {
    if (array2.includes(array1[i])) {
      array.push(array1[i]);
    }
  }
  return array;
}

console.log("[[1, 2, 3, 4, 5], [3, 4, 5, 6, 7]] ->", findIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));   // 3, 4, 5
console.log("[[1, 2, 3], [10, 20, 30]] ->", findIntersection([1, 2, 3], [10, 20, 30]));
console.log("[[0, 1, 66, 3, 45, 100], [5, 4, 3, 1, 88, 1900]] ->", findIntersection([0, 1, 66, 3, 45, 100], [5, 4, 3, 1, 88, 1900]));