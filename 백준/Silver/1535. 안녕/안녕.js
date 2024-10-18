const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

// 체력: 100 시작
// 체력은 0보다 커야함
// 최대 기쁨

const N = Number(input[0])
const L = input[1].split(" ").map(Number)
const J = input[2].split(" ").map(Number)

const dp = Array.from({ length: 101 }, () => 0)

for (let i = 0; i < N; i++) {
  for (let j = 100; j > 0; j--) {
    if (L[i] < j) {
      dp[j] = Math.max(dp[j - L[i]] + J[i], dp[j])
    }
  }
}

console.log(Math.max(...dp))