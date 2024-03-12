const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n,m] = input[0].split(' ').map(Number)
console.log(Math.abs(n-m))