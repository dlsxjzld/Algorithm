const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, k] = input[0].split(" ").map(Number)
const dp = Array.from({ length: k + 1 }, () =>
  Array.from({ length: n + 1 }, () => 0),
)

for (let j = 0; j <= n; j += 1) {
  dp[1][j] = 1
}

for (let i = 2; i <= k; i += 1) {
  for (let j = 0; j <= n; j += 1) {
    if (j === 0) {
      dp[i][j] = 1
    } else {
      dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % 1_000_000_000
    }
  }
}
console.log(dp[k][n])
