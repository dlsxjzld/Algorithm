const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, k] = input[0].split(" ").map(Number)

const dp = Array.from({ length: k + 1 }, () => 0)

for (let i = 1; i <= n; i++) {
  const [w, v] = input[i].split(" ").map(Number)
  for (let weight = k; weight >= w; weight--) {
    dp[weight] = Math.max(dp[weight], dp[weight - w] + v)
  }
}

console.log(dp[k])