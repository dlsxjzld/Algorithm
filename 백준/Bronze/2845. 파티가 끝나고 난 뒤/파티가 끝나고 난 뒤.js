const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const number = (input[0].split(' ').map(Number)).reduce((prev,cur)=>prev*cur)
console.log(input[1].split(' ').map(Number).map((val)=>val-number).join(' '))