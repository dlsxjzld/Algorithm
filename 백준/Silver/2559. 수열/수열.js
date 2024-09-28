const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, k] = input[0].split(" ").map(Number)
const numbers = input[1].split(" ").map(Number)
let current = numbers.slice(0, k).reduce((a, b) => a + b)
let answer = current

for (let i = 1; i < n - k + 1; i++) {
  current -= numbers[i - 1]
  current += numbers[i + k - 1]
  answer = Math.max(answer, current)
}
console.log(answer)