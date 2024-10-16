const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, k] = input[0].split(" ").map(Number)
const bags = input.slice(1).map((row) => row.split(" ").map(Number))
const dp = Array.from({ length: k + 1 }, () => 0)

for (let [w, v] of bags) {
  for (let start = k; start >= w; start--) {
    if (dp[start] < dp[start - w] + v) {
      dp[start] = dp[start - w] + v
    }
  }
}
console.log(Math.max(...dp))