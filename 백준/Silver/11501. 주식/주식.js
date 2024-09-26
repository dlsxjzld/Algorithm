const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
const t = Number(input[0])
const answer = []
let index = 1
for (let tc = 0; tc < t; tc++) {
  const n = Number(input[index++])
  const prices = input[index++].split(" ").map(Number)
  let maxPrice = 0

  let total = 0

  for (let i = n - 1; i >= 0; i--) {
    if (maxPrice < prices[i]) {
      maxPrice = prices[i]
    } else if (maxPrice >= prices[i]) {
      total += maxPrice - prices[i]
    }
  }
  answer.push(total)
}

console.log(answer.join("\n"))
