const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

let n = Number(input[0])
const answer = []

const MAX = Number.MAX_SAFE_INTEGER
const dp = Array.from({ length: n + 1 }, () => MAX)
const graph = Array.from({ length: n + 1 }, () => MAX)
dp[1] = 0

for (let i = 2; i < n + 1; i++) {
  dp[i] = dp[i - 1] + 1
  graph[i] = i - 1

  if (i % 2 == 0 && dp[i/2]+1 < dp[i]) {
    dp[i] =dp[i / 2] + 1
    graph[i] = i / 2
  }
  if (i % 3 == 0 && dp[i / 3] + 1 <dp[i]) {
    dp[i] =dp[i / 3] + 1
    graph[i] = i / 3
  }
}

let start = n
const path = [start]

for (let i = 0; i < dp[n]; i++) {
  const next = graph[start]
  path.push(next)
  start = next
}
console.log(dp[n])
console.log(path.join(" "))
