const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const T = Number(input[0])

const dp = Array.from({ length: 100_001 }, () => [0, 0])
dp[1][0] = 1
dp[2][0] = 1
dp[2][1] = 1
dp[3][1] = 2
dp[3][0] = 2
for (let i = 4; i <= 100_000; i += 1) {
  dp[i][1] = (dp[i - 1][0] + dp[i - 2][0] + dp[i - 3][0]) % 1_000_000_009
  dp[i][0] = (dp[i - 1][1] + dp[i - 2][1] + dp[i - 3][1]) % 1_000_000_009
}
const answer = []
for(let i=1;i<=T;i+=1){
  const n = Number(input[i])
  
  answer.push(dp[n].join(' '))
}
console.log(answer.join('\n'))