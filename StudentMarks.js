// Add a new attribute with each student whether he is pass or fail.
// A student passes if his marks are above or equal to 60, otherwise fail.

let students = [
  { name: "Aisha", marks: 80 },
  { name: "Hassan", marks: 50 },
  { name: "Fatima", marks: 90 }
];

let result = students.map(
  (element) => {
    let grade = element.marks >= 60 ? true : false;
    return element["pass"] = grade;
  }
);

console.log(students, "->", result);