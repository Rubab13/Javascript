// Capitalize the First Letter of Each Word

let string = "hello world";

console.log(string.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" "));