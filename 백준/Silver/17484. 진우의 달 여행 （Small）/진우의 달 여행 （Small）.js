const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

// 1. 지구 -> 달로 가는 경우 우주선이 움직일 수 있는 방향은 아래와 같다.
// 2. 우주선은 전에 움직인 방향으로 움직일 수 없다. 즉, 같은 방향으로 두번 연속으로 움직일 수 없다.
// 3. 연료를 최대한 아끼며 지구의 어느위치에서든 출발하여 달의 어느위치든 착륙하는 것
const MAX = Number.MAX_SAFE_INTEGER
const [n, m] = input[0].split(' ').map(Number)
const distance = [
  Array.from({ length: m }, () => 0),
  ...input.slice(1, n + 1).map((row) => row.split(' ').map(Number)),
]

const dp = Array.from({ length: n + 1 }, () =>
  Array.from({ length: m }, () => Array.from({ length: 3 }, () => 0))
)

// dp[ridx][cidx][direction] = direction에 해당하는 방향으로 들어오는 [ridx][cidx]]까지의 연료의 최소값


for (let ridx = 1; ridx < n + 1; ridx++) {
  for (let cidx = 0; cidx < m; cidx++) {
    if (cidx === 0) {
      // 가장 왼쪽 벽
      dp[ridx][cidx][0] =
        distance[ridx][cidx] +
        Math.min(dp[ridx - 1][cidx + 1][1], dp[ridx - 1][cidx + 1][2])
      dp[ridx][cidx][1] =
        distance[ridx][cidx] +
        Math.min(dp[ridx - 1][cidx][0], dp[ridx - 1][cidx][2])
      dp[ridx][cidx][2] = MAX
    } else if (cidx === m - 1) {
      // 가장 오른쪽 벽
      dp[ridx][cidx][0] = MAX
      dp[ridx][cidx][1] =
        distance[ridx][cidx] +
        Math.min(dp[ridx - 1][cidx][0], dp[ridx - 1][cidx][2])
      dp[ridx][cidx][2] =
        distance[ridx][cidx] +
        Math.min(dp[ridx - 1][cidx - 1][0], dp[ridx - 1][cidx - 1][1])
    } else {
      dp[ridx][cidx][0] =
        distance[ridx][cidx] +
        Math.min(dp[ridx - 1][cidx + 1][1], dp[ridx - 1][cidx + 1][2])
      dp[ridx][cidx][1] =
        distance[ridx][cidx] +
        Math.min(dp[ridx - 1][cidx][0], dp[ridx - 1][cidx][2])
      dp[ridx][cidx][2] =
        distance[ridx][cidx] +
        Math.min(dp[ridx - 1][cidx - 1][0], dp[ridx - 1][cidx - 1][1])
    }
  }
}

console.log(Math.min(...dp[n].flat()))
