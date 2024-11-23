const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const t = Number(input[0])

const numbers = input.slice(1).map(Number)
const dp = Array.from({ length: 10001 }, () =>
  Array.from({ length: 4 }, () => 0),
)
dp[1][1] = 1
dp[2][1] = 1
dp[2][2] = 1
dp[3][1] = 1
dp[3][2] = 1
dp[3][3] = 1

for (let i = 4; i < 10001; i++) {
  dp[i][1] = dp[i - 1][1]
  dp[i][2] = dp[i - 2][2] + dp[i-2][1]
  dp[i][3] = dp[i - 3][1] + dp[i - 3][2] + dp[i - 3][3]
}
const answer = []
for(let num of numbers){
  answer.push(dp[num][1] + dp[num][2] + dp[num][3])
}
console.log(answer.join('\n'))