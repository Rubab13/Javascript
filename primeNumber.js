// Check for Prime Number

function isPrime(num) {
  if (num === 1) {
    return false;
  }

  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      count++;
    }
  }

  return count === 2 ? true : false;
}

console.log(isPrime(7)); // true
console.log(isPrime(10)); // false