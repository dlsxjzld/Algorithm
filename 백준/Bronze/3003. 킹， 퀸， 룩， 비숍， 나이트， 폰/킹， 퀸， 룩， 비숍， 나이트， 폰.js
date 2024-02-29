const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [a,b,c,d,e,f] = input[0].split(' ').map(Number)

console.log(1-a,1-b,2-c,2-d,2-e,8-f)