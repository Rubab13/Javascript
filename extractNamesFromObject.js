// Extract names from objects

let users = [
  { name: "Ali", age: 25 },
  { name: "Sara", age: 22 },
  { name: "Ahmed", age: 30 }
];

let result = users.map(
  (element) => {
    return element.name;
  }
);

console.log(users, "->", result);