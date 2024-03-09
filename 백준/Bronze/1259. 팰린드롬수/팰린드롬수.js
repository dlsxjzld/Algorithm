const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

while (true) {
  const num = input.shift().toString()
  if (num === "0") {
    break
  }
  
  console.log(num === Array.from(num).reverse().join('') ? "yes" : "no")
}
