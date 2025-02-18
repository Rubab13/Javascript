// Calculate Factorial

function factorial(num) {
  let result = 1;

  if (num === 0) {
    return result;
  }
  
  for (let i = 1; i <= num; i++) {
    result = result * i;
  }

  return result;
}

console.log(factorial(5)); // 120