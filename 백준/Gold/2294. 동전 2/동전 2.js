const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, k] = input[0].split(" ").map(Number)
const coins = input.slice(1).map(Number)

const dp = Array.from({ length: k + 1 }, () => Number.MAX_SAFE_INTEGER)
dp[0] = 0

for (let i = 0; i < n; i++) {
  dp[coins[i]] = 1

  for (let j = coins[i]; j <= k; j++) {
     dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1)
  }

}
console.log(dp[k] === Number.MAX_SAFE_INTEGER ? -1 : dp[k])
