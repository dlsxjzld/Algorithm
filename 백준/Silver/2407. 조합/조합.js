const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, m] = input[0].split(" ").map(Number)
const dp = Array.from({ length: 101 }, () =>
  Array.from({ length: 101 }, () => BigInt(0)),
)
for (let i = 1; i <= n; i++) {
  for (let j = 0; j <= i; j++) {
    if (j == 0 || j == i) {
      dp[i][j] = BigInt(1)
    } else {
      dp[i][j] = BigInt(dp[i - 1][j]) + BigInt(dp[i - 1][j - 1])
    }
  }
}
console.log(dp[n][m].toString())
