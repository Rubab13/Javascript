// Convert into boolean

let values = [0, 1, "", "hello", undefined, true, false];

let result = values.map(
  (element) => {
    return Boolean(element);
  }
);

console.log(result);