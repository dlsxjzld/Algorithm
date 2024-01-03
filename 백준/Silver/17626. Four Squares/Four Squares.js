const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

let n = Number(input[0])
const dp = Array.from({ length: n + 1 }, () => 0)
dp[1] = 1

for(let i=2;i<n+1;i++){
  let min =4
  for(let j=1;j*j<=i;j++){
    min = Math.min(min,dp[i-j*j])
  }
  dp[i] = min+1
}
console.log(dp[n])