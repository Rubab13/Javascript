let rows = 5;

for (let i=0; i<rows; i++) {
  for (let j=rows-1; j>i; j--) {
    process.stdout.write(" ");
  }
  for (let j=0; j<=i; j++) {
    process.stdout.write("*");
  }
  console.log();
}