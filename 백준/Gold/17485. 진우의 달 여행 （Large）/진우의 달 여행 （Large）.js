const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, m] = input[0].split(" ").map(Number)
const values = [Array.from({ length: m }, () => 0)].concat(
  input.slice(1).map((row) => row.split(" ").map(Number)),
)

const dp = Array.from({ length: n + 1 }, () =>
  Array.from({ length: m }, () => Array.from({ length: 3 }, () => Infinity)),
)

for (let i = 0; i < m; i++) {
  for (let j = 0; j < 3; j++) {
    dp[0][i][j] = 0
  }
}
const dir = [
  [1, 1],
  [1, 0],
  [1, -1],
]

for (let r = 1; r <= n; r++) {
  for (let c = 0; c < m; c++) {
    for (let direction = 0; direction < 3; direction++) {
      const [pr, pc] = [r - dir[direction][0], c - dir[direction][1]]

      if (pr < 0 || pc < 0 || pr > n || pc >= m) continue
      if (c === 0 && direction === 0) {
        continue
      } else if (c === m - 1 && direction === 2) {
        continue
      } else {
        dp[r][c][direction] =
          values[r][c] +
          Math.min(
            dp[pr][pc][(direction + 1) % 3],
            dp[pr][pc][(direction + 2) % 3],
          )
      }
    }
  }
}

console.log(Math.min(... dp[n].flat()))
