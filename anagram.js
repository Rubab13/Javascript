// Check if Two Strings are Anagrams

let string1 = "gum";
let string2 = "mug";

if (string1.length !== string2.length) {
  console.log("The two strings are not anagrams.");
}
else {
  let array1 = string1.split("");
  let array2 = string2.split("");
  let count = 0;

  for (let i=0; i<array1.length; i++) {
    if (array2.includes(array1[i])) {
      count++;
    }
  }

  if (count === array1.length) {
    console.log("The strings are anagrams.")
  }
  else {
    console.log("The strings are not anagrams.");
  }
}