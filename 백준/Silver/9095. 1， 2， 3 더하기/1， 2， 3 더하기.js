const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const T = Number(input[0])
const dp = Array(11).fill(0)
dp[1] = 1
dp[2] = 2
dp[3] = 4

for (let j = 4; j < 11; j++) {
  dp[j] = dp[j - 1] + dp[j - 2] + dp[j - 3]
}
const answer = []

for (let i = 1; i < T + 1; i++) {
  const num = Number(input[i])
  answer.push(dp[num])
}

console.log(answer.join("\n"))
