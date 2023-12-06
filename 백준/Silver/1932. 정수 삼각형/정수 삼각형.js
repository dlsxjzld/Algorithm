const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const n = Number(input[0])
const triangle = input.slice(1, 1 + n).map((row) => row.split(' ').map(Number))
const dp = Array.from({ length: n }, () => Array.from({ length: n }, () => 0))

dp[0][0] = triangle[0][0]

for (let ridx = 1; ridx < n; ridx++) {
  for (let cidx = 0; cidx < ridx + 1; cidx++) {
    if (cidx === 0) {
      // 가장 왼쪽
      dp[ridx][cidx] = triangle[ridx][cidx] + dp[ridx - 1][cidx]
    } else if (cidx === ridx) {
      // 가장 오른쪽
      dp[ridx][cidx] = triangle[ridx][cidx] + dp[ridx - 1][cidx - 1]
    } else {
      dp[ridx][cidx] =
        triangle[ridx][cidx] +
        Math.max(dp[ridx - 1][cidx - 1], dp[ridx - 1][cidx])
    }
  }
}
console.log(Math.max(...dp[n - 1]))
