const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
const N = Number(input[0])



  const dp = Array.from({length:N+1},()=>0)
  dp[0] = 0
  dp[1] = 1
  dp[2] = 2
  dp[3] = 3

  for(let i=3;i<=N;i+=1){
    dp[i] = (dp[i-1] + dp[i-2])%15746
  }

  console.log(dp[N])
