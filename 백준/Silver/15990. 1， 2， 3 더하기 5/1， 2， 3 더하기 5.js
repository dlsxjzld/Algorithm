const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const T = Number(input[0])
const MAX = 100_000
const DIVIDE = 1_000_000_009
const dp = Array.from({ length: MAX + 1 }, () =>
  Array.from({ length: 4 }, () => 0),
)

dp[1][1] = 1
dp[2][2] = 1
dp[3][1] = 1
dp[3][2] = 1
dp[3][3] = 1

for (let i = 4; i < MAX + 1; i++) {
  dp[i][1] = (dp[i - 1][2] + dp[i - 1][3]) % DIVIDE
  dp[i][2] = (dp[i - 2][1] + dp[i - 2][3]) % DIVIDE
  dp[i][3] = (dp[i - 3][1] + dp[i - 3][2]) % DIVIDE
}

const answer = []

for (let tc = 1; tc < T + 1; tc++) {
  const num = Number(input[tc])
  answer.push((dp[num][1] + dp[num][2] + dp[num][3]) % DIVIDE)
}

console.log(answer.join("\n"))
