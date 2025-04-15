const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, m] = input[0].split(" ").map(Number)
const graph = input.slice(1).map((row) => row.split(" ").map(Number))
const sum = Array.from({ length: n + 1 }, () =>
  Array.from({ length: m + 1 }, () => 0),
)

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= m; j++) {
    sum[i][j] =
      sum[i - 1][j] + sum[i][j - 1] - sum[i - 1][j - 1] + graph[i - 1][j - 1]
  }
}

let answer = -Infinity

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= m; j++) {
    let [x, y] = [i, j]
    // x,y는 시작점이고 col,row 까지 범위에 있는 영역의 넓이를 구한다.
    for (let row = x; row <= n; row++) {
      for (let col = y; col <= m; col++) {
        let area =
          sum[row][col] - sum[row][y - 1] - sum[x - 1][col] + sum[x - 1][y - 1]
        if (area > answer) answer = area
      }
    }
  }
}

console.log(answer)