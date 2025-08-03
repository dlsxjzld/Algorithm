const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const N = Number(input[0])
const numbers = input.slice(1).map(Number)
// 3 7 5 2 6 1 4
const dp = Array.from({ length: N }, () => 0)

// 다 옮기는 데 최소 수
// 아이를 옮기는 방법
// 옮겼을 때 최소 횟수

for (let i = 0; i < N; i += 1) {
  dp[i] = 1
  for (let j = 0; j < i; j += 1) {
    if (numbers[i] > numbers[j] && dp[j] + 1 > dp[i]) {
      dp[i] = dp[j] + 1
    }
    // console.log("dp", dp)
  }
}
console.log(N - Math.max(...dp))
