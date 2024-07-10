const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

// 0 1 2 3 4 5 6  7 8 9
//   1 2 3 3 4 1 10 8 1

//   0 0 0 0 0 1 1  2 3
//   1부터 i까지의 누적된 실수

const n = Number(input[0])
const arr = [0].concat(input[1].split(" ").map(Number))
const dp = Array(n + 1).fill(0)
const q = Number(input[2])

for (let i = 1; i < n; i++) {
  dp[i + 1] = dp[i]

  if (arr[i] > arr[i + 1]) {
    dp[i + 1] = dp[i] + 1
  }
}

const answer = []
for (let i = 3; i < q + 3; i++) {
  const [x, y] = input[i].split(" ").map(Number)
  answer.push(dp[y] - dp[x])
}

console.log(answer.join('\n'))
