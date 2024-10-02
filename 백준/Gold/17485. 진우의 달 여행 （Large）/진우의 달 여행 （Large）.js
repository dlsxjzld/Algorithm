const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, m] = input[0].split(" ").map(Number)
const values = [Array.from({ length: m }, () => 0)].concat(
  input.slice(1).map((row) => row.split(" ").map(Number)),
)

const dp = Array.from({ length: n + 1 }, () =>
  Array.from({ length: m+2 }, () => Array.from({ length: 3 }, () => 1000000)),
)

for (let i = 1; i <= m; i++) {
  for (let j = 0; j < 3; j++) {
    dp[0][i][j] = 0
  }
}

for (let r = 1; r <= n; r++) {
  for (let c = 1; c <= m; c++) {
    dp[r][c][0] = values[r][c-1] + Math.min(dp[r-1][c-1][1],dp[r-1][c-1][2])
    dp[r][c][1] = values[r][c-1] + Math.min(dp[r-1][c][0],dp[r-1][c][2])
    dp[r][c][2] = values[r][c-1] + Math.min(dp[r-1][c+1][0],dp[r-1][c+1][1])

  }
}

console.log(Math.min(... dp[n].flat()))
