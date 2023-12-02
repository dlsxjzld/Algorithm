const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const n = Number(input[0])

const scores = [0, ...input.slice(1, n + 1).map((val) => Number(val))]
const dp = Array.from({ length: n + 1 }, () => 0)

// dp[i] = i 계단까지의 최대 점수

dp[1] = scores[1]
if (n >= 2) {
  dp[2] = scores[1] + scores[2]
}
if (n >= 3) {
  for (let i = 3; i < n + 1; i++) {
    dp[i] = scores[i] + Math.max(dp[i - 2], scores[i - 1] + dp[i - 3])
  }
}

console.log(dp[n])
