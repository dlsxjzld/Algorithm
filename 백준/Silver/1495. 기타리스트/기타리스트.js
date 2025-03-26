const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, s, m] = input[0].split(" ").map(Number)
const volumes = input[1].split(" ").map(Number)

const dp = Array.from({ length: 51 }, () =>
  Array.from({ length: 1001 }, () => 0),
)

dp[0][s] = true

for (let i = 1; i <= n; i += 1) {
  const current = volumes[i - 1]
  for (let j = 0; j <= m; j += 1) {
    if (dp[i-1][j] === true) {
      if (j + current <= m) {
        dp[i][j + current] = true
      }
      if (j - current >= 0) {
        dp[i][j - current] = true
      }
    }
  }
}

let answer = -1
for (let i = 0; i <= m; i += 1) {
  if (dp[n][i] === true) {
    answer = i
  }
}

console.log(answer)
