const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [c, n] = input[0].split(" ").map(Number)
const dp = Array.from({ length: c + 1 }, () => Infinity)
dp[0] = 0
for (let tc = 1; tc < 1 + n; tc++) {
  const [cost, customer] = input[tc].split(" ").map(Number)

  for (let i = 1; i <= c; i++) {
   if(i<=customer){
       dp[i] = Math.min(dp[i],cost)
   }else{
       dp[i] = Math.min(dp[i],dp[i - customer] + dp[customer])
   }
  }
  
}
console.log(dp[c])
