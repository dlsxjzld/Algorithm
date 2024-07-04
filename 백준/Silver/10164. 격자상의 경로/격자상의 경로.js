const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, m, k] = input[0].split(" ").map(Number)

const dp = Array.from({ length: n }, () => Array.from({ length: m }, () => 0))
dp[0][0] = 1

if (k === 0) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i + 1 < n) {
        dp[i + 1][j] += dp[i][j]
      }
      if (j + 1 < m) {
        dp[i][j + 1] += dp[i][j]
      }
    }
  }
} else {
  const target_r = Math.floor(k / m)
  const target_c = (k % m) - 1

  for (let i = 0; i <= target_r; i++) {
    for (let j = 0; j <= target_c; j++) {
      if (i + 1 <= target_r) {
        dp[i + 1][j] += dp[i][j]
      }
      if (j + 1 <= target_c) {
        dp[i][j + 1] += dp[i][j]
      }
    }
  }
  for (let i = target_r; i < n; i++) {
    for (let j = target_c; j < m; j++) {
      if (i + 1 < n) {
        dp[i + 1][j] += dp[i][j]
      }
      if (j + 1 < m) {
        dp[i][j + 1] += dp[i][j]
      }
    }
  }
}

console.log(dp[n - 1][m - 1])
