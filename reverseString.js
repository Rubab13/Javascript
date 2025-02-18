function reverseString(str) {
  let reverse = ""
  for (let i=0; i<str.length; i++) {
    reverse = str[i] + reverse;
  }
  return reverse;
}
console.log(reverseString("rubab"));