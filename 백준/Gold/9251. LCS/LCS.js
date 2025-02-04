const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const row = input[0].split("")
const col = input[1].split("")
const dp = Array.from({ length: row.length + 1 }, () =>
  Array.from({ length: col.length + 1 }, () => 0),
)

for(let i=1;i<=row.length;i+=1){
  for(let j=1;j<=col.length;j+=1){
    if(row[i-1] === col[j-1]){
      dp[i][j] = dp[i-1][j-1]+1
    }else{
      dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1])
    }
  }
}

const answer = []
dp.forEach((row)=> answer.push(...row))
console.log(Math.max(...answer))