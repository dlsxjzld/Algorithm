const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")

/**
 * 정수 4를 1, 2, 3의 합으로 나타내는 방법은 총 3가지가 있다. 합을 나타낼 때는 수를 1개 이상 사용해야 한다.
 *  단, 같은 수를 두 번 이상 연속해서 사용하면 안 된다.
 * 4
 * 
 * 1+2+1
 * 1+3
 * 3+1
 */

const t = Number(input[0])
const nums = input.slice(1).map(Number)
const DIVIDE = 1_000_000_009
const dp = Array.from({length:100001},()=>Array.from({length:4},()=>0))
dp[1][1] = 1
dp[2][2] = 1
dp[3][1] = 1
dp[3][2] =1
dp[3][3] =1

for(let i=4;i<=100000;i++){
  dp[i][1] = (dp[i-1][2] +dp[i-1][3])%DIVIDE
  dp[i][2] = (dp[i-2][1] +dp[i-2][3])%DIVIDE
  dp[i][3] = (dp[i-3][1] +dp[i-3][2])%DIVIDE
}

const answer =[]
for(let n of nums){
  answer.push((dp[n][1] + dp[n][2] + dp[n][3])%DIVIDE)
}
console.log(answer.join('\n'))


