const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const a = input[0]
const b = input[1]
const c = input[2]
console.log(+a + +b -c)
console.log(a+b-c)