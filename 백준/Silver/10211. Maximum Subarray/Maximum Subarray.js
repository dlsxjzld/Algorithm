const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const t = Number(input[0])
for (let tc = 0; tc < t; tc += 1) {
  const n = Number(input[tc * 2 + 1])
  const numbers = input[tc * 2 + 2].split(" ").map(Number)
  const dp = [...numbers]

  for (let i = 1; i < n; i += 1) {
    if (dp[i] + dp[i - 1] > dp[i]) {
      dp[i] += dp[i - 1]
    }
  }
  console.log(Math.max(...dp))
}
