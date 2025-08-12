const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")


const n = Number(input[0])
console.log(2**(n))