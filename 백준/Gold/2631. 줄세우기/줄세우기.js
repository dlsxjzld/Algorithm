const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])
const numbers = input.slice(1).map(Number)
const dp = Array.from({length:n},()=>0)

for(let i=0;i<n;i+=1){
  dp[i] = 1
  for(let j=0;j<i;j+=1){
    if(numbers[i] > numbers[j] && dp[j]+1 > dp[i]){
      dp[i] = dp[j]+1
    }
  }
}
console.log(n-Math.max(...dp))
