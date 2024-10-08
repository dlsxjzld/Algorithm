const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

  const t = Number(input[0])
  const nums = input.slice(1).map(Number)

  const dp =Array.from({length:11},()=>0)
  dp[1] = 1
  dp[2] = 2
  dp[3] = 4

  for(let i=4;i<11;i++){
    dp[i] = dp[i-1] + dp[i-2] + dp[i-3]
  }

  for(let num of nums){
    console.log(dp[num])
  }