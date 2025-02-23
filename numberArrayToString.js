// Convert numbers array to string format

let nums = [10, 20, 30];

let result = nums.map(
  (element) => {
    return element.toString();
  }
);

console.log(nums, "->", result);