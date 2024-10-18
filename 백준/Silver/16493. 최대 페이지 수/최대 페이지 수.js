const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")

const [N,M] = input[0].split(' ').map(Number)
const books = input.slice(1).map(row=>row.split(' ').map(Number))

const dp = Array.from({length:N+1},()=>0)

for(let i=0;i<M;i++){

  const [day,page] = books[i]

  for(let j=N;j>0;j--){
    if(j>=day){
      dp[j] = Math.max(dp[j],dp[j-day]+page)
    }
  }
}

console.log(Math.max(...dp))