const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])
const days = input.slice(1).map((row) => row.split(" ").map(Number))

const dp = Array.from({ length: n }, () => 0)

for (let i = 0; i <n; i++) {
  const [t, p] = days[i]
  if (i + t > n) continue
  dp[i] = dp[i] + p
  for(let j=i+t;j<n;j++){
    dp[j] = Math.max(dp[j],dp[i])
  }
}
console.log(Math.max(...dp))
