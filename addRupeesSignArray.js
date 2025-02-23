// Add 'Rs.' with every element of the array

let prices = [100, 200, 300];

let result = prices.map(
  (price) => {
    return "Rs. " + price;
  }
);

console.log(prices, "->", result);