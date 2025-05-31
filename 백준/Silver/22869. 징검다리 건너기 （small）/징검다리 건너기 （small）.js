const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, k] = input[0].split(" ").map(Number)
const arr = input[1].split(" ").map(Number)

const dp = Array.from({ length: n }, () => false)

// 가장 왼쪽 돌에서 출발
dp[0] = true

// dp[i] i번째 돌이 되는지

for (let i = 0; i < n; i += 1) {
  if (!dp[i]) {
    continue
  }

  for (let j = i + 1; j < n; j += 1) {
    const str = (j - i) * (1 + Math.abs(arr[i] - arr[j]))
    if (str > k) {
      continue
    } else {
      dp[j] = true
    }
  }
}

const answer = dp[n - 1]

console.log(answer ? "YES" : "NO")
