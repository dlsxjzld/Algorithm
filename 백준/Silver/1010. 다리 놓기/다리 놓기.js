const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const T = Number(input[0])
const dp = Array.from({ length: 30 }, () => Array.from({ length: 30 }, () => 0))

for (let i = 1; i < 30; i++) {
  dp[1][i] = i
}
for (let i = 2; i < 30; i++) {
  for (let j = 2; j < 30; j++) dp[i][j] = dp[i - 1][j - 1] + dp[i][j - 1]
}

const answer = []
for (let tc = 1; tc <= T; tc++) {
  const [n, m] = input[tc].split(" ").map(Number)
  answer.push(dp[n][m])
}

console.log(answer.join("\n"))
