const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const convertedArray = input.map(Number)
const average = convertedArray.reduce((prev,cur)=>prev+cur,0) / input.length
console.log(average)
console.log(convertedArray.sort((a,b)=>a-b)[2])