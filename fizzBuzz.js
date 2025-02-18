// FizzBuzz Game

// Write a function that prints numbers from 1 to 100.

// If a number is divisible by 3, print "Fizz" instead of the number.
// If a number is divisible by 5, print "Buzz" instead of the number.
// If a number is divisible by both 3 and 5, print "FizzBuzz" instead of the number.

for (let i = 1; i <= 100; i++) {
  console.log(i%3 === 0 && i%5===0 ? "FizzBuzz" : i%3 === 0 ? "Fizz": i%5 === 0 ? "Buzz" : i);
}