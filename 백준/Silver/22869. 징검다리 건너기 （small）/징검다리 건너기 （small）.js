const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, k] = input[0].split(" ").map(Number)
const A = input[1].split(" ").map(Number)

const dp = Array.from({ length: n }, () => false)
dp[0] = true

for (let j = 1; j < n; j += 1) {
  const cost = j * (1 + Math.abs(A[0] - A[j]))
  if (cost > k) {
    continue
  }
  dp[j] = true
}

for (let i = 1; i < n - 1; i += 1) {
  if (!dp[i]) {
    continue
  }
  for (let j = i + 1; j < n; j += 1) {
    const cost = (j - i) * (1 + Math.abs(A[i] - A[j]))
    if (cost > k) {
      continue
    }
    dp[j] = true
  }
}

console.log(dp[n - 1] ? "YES" : "NO")
