const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [t, w] = input[0].split(" ").map(Number)
const trees = input.slice(1).map(Number)

// 그대로 있기
// 움직이기

const dp = Array.from({ length: t }, () =>
  Array.from({ length: w + 1 }, () => 0),
)

for (let j = 0; j <= w; j += 1) {
  const tree = trees[0]

  if (tree === 1) {
    if (j % 2 === 1) {
      // 움직임 -> 2번 나무
      dp[0][j] = 0
    } else {
      // 움직임 X -> 1번 나무
      dp[0][j] = 1
    }
  } else {
    if (j % 2 === 1) {
      // 움직임 -> 2번 나무
      dp[0][j] = 1
    } else {
      // 움직임 X -> 1번 나무
      dp[0][j] = 0
    }
  }
}

for (let i = 1; i < t; i += 1) {
  const tree = trees[i]

  if (tree === 1) {
    dp[i][0] = dp[i - 1][0] + 1
  } else {
    dp[i][0] = dp[i - 1][0]
  }

  for (let j = 1; j <= w; j += 1) {
    dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1])
    if (j % 2 === 0 && tree === 1) {
      dp[i][j] += 1
    } else if (j % 2 === 1 && tree === 2) {
      dp[i][j] += 1
    }
  }
}
console.log(Math.max(...dp[t-1]))
