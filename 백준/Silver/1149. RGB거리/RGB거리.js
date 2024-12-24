const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const N = Number(input[0])
const houses = input.slice(1).map((row) => row.split(" ").map(Number))

const dp = Array.from({length:N},()=>Array.from({length:3},()=>Infinity))

dp[0][0] = houses[0][0]
dp[0][1] = houses[0][1]
dp[0][2] = houses[0][2]

for(let i=1;i<N;i+=1){
  dp[i][0] = Math.min(dp[i][0],houses[i][0] + Math.min(dp[i-1][1],dp[i-1][2]))
  dp[i][1] = Math.min(dp[i][1],houses[i][1] + Math.min(dp[i-1][0],dp[i-1][2]))
  dp[i][2] = Math.min(dp[i][2],houses[i][2] + Math.min(dp[i-1][0],dp[i-1][1]))
}

console.log(Math.min(...dp[N-1]))