const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, k] = input[0].split(" ").map(Number)
const MAX = 100_000
const dp = Array.from({ length: MAX + 1 }, () => -1)

const queue = [n]
dp[n] = 0
let index = 0

while (queue.length > index) {
  const cur = queue[index++]
  if (cur == k) continue

  for (let i of [cur - 1, cur + 1, cur * 2]) {
    if (i >= 0 && i <= MAX && dp[i] == -1) {
      dp[i] = dp[cur] + 1
      queue.push(i)
    }
  }
}

console.log(dp[k])