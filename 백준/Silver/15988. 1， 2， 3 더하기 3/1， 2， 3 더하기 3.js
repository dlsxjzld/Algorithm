const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const T = Number(input[0])
const MAX = 1_000_000
const DIVIDE = 1_000_000_009
const dp = Array(MAX + 1).fill(0)
dp[1] = 1
dp[2] = 2
dp[3] = 4

for (let i = 4; i <= MAX; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % DIVIDE
}

for (let tc = 1; tc < T + 1; tc++) {
  const target = Number(input[tc])
  console.log(dp[target])
}
