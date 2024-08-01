const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const  n = BigInt(input[0])

const dp = Array.from({length:+(n+1n).toString()},()=>BigInt(0))
dp[1] = 1n

for(let i=2;i<=n;i++){
    dp[i] = dp[i-1] + dp[i-2]
}
console.log(dp[n].toString())