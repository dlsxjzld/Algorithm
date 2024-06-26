const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

let N = Number(input[0])

const dp = Array(N + 1).fill(Infinity)
dp[N] = 0

while (N >= 1) {
  if (N % 3 === 0) {
    dp[N / 3] = Math.min(dp[N / 3], dp[N] + 1)
  }

  if (N % 2 === 0) {
    dp[N / 2] = Math.min(dp[N / 2], dp[N] + 1)
  }
  dp[N - 1] = Math.min(dp[N - 1], dp[N] + 1)
  N--
}

console.log(dp[1])