const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])
const dp = Array.from({ length: n + 1 }, () => 0)
dp[2] = 3

if (n % 2) {
  console.log(0)
} else {
  for (let i = 4; i <= n; i++) {
    dp[i] = dp[i - 2] * 3+2
    for (let j = i - 4; j > 0; j -= 2) {
      dp[i] += dp[j] * 2
    }
  }
  console.log(dp[n])
}
