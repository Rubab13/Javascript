let rows = 5;

for (let i=0; i<rows; i++) {
  for (let j=rows; j>i; j--) {
    process.stdout.write("*");
  }
  console.log();
}