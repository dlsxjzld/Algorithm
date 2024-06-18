const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])
const numbers = input[1].split(" ").map(Number)

const getSubSum = (arr) => {
  return arr.reduce((a, b) => a + b, 0)
}

let multi = numbers[0]
let add = getSubSum(numbers.slice(1))
let ssum = multi * add

for (let i = 1; i < n; i++) {
  multi = numbers[i]
  add -= multi

  ssum += multi * add
}

console.log(ssum)