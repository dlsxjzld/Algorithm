const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])
const box = input[1].split(" ").map(Number)
const dp = Array.from({ length: n  }, () => 1)

for(let i=0;i<n;i++){
  for(let j=i+1;j<n;j++){
    if(box[j] > box[i]){
      dp[j] = Math.max(dp[j],dp[i]+1)
    }
  }
}
const answer = Math.max(...dp)
console.log(answer)