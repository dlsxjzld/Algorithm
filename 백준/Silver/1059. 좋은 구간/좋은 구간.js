const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const l = Number(input[0])
const S = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b)
const n = Number(input[2])

let maxIndex = S.findIndex((value) => value > n)
let max = S[maxIndex] // 포함되면 안됨
let min = S[maxIndex - 1] || 0 // 포함되면 안됨

let count = (max-n) * (n-min) -1
console.log(count <=0 ? 0 : count)