const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n,k] = input[0].split(' ').map(Number)
const arr = input[1].split(' ').map(Number).sort((a,b)=>b-a)
console.log(arr[k-1])