// Count Vowels in a String

let string = "hello";
let count = 0;
vowels = ['a', 'e', 'i', 'o', 'u'];

for (let i=0; i < string.length; i++) {
  if (vowels.includes(string[i])) {
    count++;
  }
}

console.log("The number of vowels in the given string is ", count, ".")