const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [N, D] = input[0].split(" ").map(Number)
const roads = input
  .slice(1)
  .map((row) => row.split(" ").map(Number))
  .filter(([_, end, v]) => end <= D)
  .sort((a, b) => a[1] - b[1])

const dp = Array.from({ length: D + 1 }, (v, index) => index)

for (let [s, e, value] of roads) {
  dp[e] = Math.min(dp[e], dp[s] + value)

  for (let i = e + 1; i <= D; i++) {
    if (dp[i] > dp[e] + (i - e)) {
      dp[i] = dp[e] + (i - e)
    }
  }
}

console.log(dp[D])
