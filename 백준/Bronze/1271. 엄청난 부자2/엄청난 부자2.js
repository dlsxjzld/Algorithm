const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  
  const [n,m] = input[0].split(' ').map(BigInt)
console.log((n/m).toString())
console.log((n%m).toString())