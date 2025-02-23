// Add "Mr./Ms." with all names

let names = ["Ali", "Sara", "Ahmed"];

let result = names.map(
  (element) => {
    return "Mr./Ms." + element;
  }
);

console.log(names, "->", result);