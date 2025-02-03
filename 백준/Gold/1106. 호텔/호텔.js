const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [c, n] = input[0].split(" ").map(Number)
const lines = input.slice(1).map((row) => row.split(" ").map(Number))

const dp = Array.from({ length: c + 1 }, () => Infinity)

for (let line of lines) {
  const [cost, customer] = line

  dp[customer] = Math.min(dp[customer], cost)

  for (let i = 1; i <= c; i += 1) {
    if (i <= customer) {
      dp[i] = Math.min(dp[i], cost)
    } else {
      dp[i] = Math.min(dp[i - customer] + cost, dp[i])
    }
  }
}

console.log(dp[c])