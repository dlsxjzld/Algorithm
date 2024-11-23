const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const t = Number(input[0])
const dp = Array.from({ length: 10_001 }, () =>
  Array.from({ length: 3 }, () => 0),
)
dp[1][0] = 1
dp[2][0] = 1
dp[2][1] = 1
dp[3][0] = 1
dp[3][1] = 1
dp[3][2] = 1

for (let i = 4; i < 10001; i += 1) {
  dp[i][0] = dp[i - 1][0]
  dp[i][1] = dp[i - 2][0] + dp[i - 2][1]
  dp[i][2] = dp[i - 3][0] + dp[i - 3][1] + dp[i - 3][2]
}
for (let tc = 1; tc <= t; tc += 1) {
  const n = Number(input[tc])
  console.log(dp[n][0] + dp[n][1] + dp[n][2])
}