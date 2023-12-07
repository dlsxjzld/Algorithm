const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const n = Number(input[0])
const Input = input.slice(1).map((row) => row.split(' ').map(Number))
const dp = Array.from({ length: n + 1 }, () => 0)
let Max = 0

for (let i = 0; i < n; i++) {
  Max = Math.max(Max, dp[i])

  const [day, pay] = Input[i]
  if (i + day <= n) {
    dp[i + day] = Math.max(dp[i + day], Max + pay)
  }
}

console.log(Math.max(...dp))
