// Check if a Number is a Power of Two

function checkPowerOfTwo (number) {
  if (number < 1) {
    return false;
  }


  while (number > 1) {
    if (number % 2 !== 0) {
      return false; // If remainder is not 0, it's not a power of two
    }
    number = number / 2; // Keep dividing by 2
  }
  
  return true;
}

console.log("512 ->", checkPowerOfTwo(512) ? "Yes" : "No");   // 512 -> Yes
console.log("0 ->", checkPowerOfTwo(0) ? "Yes" : "No");
console.log("100 ->", checkPowerOfTwo(100) ? "Yes" : "No");
console.log("-99 ->", checkPowerOfTwo(-99) ? "Yes" : "No");
console.log("4 ->", checkPowerOfTwo(4) ? "Yes" : "No");