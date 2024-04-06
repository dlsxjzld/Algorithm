const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const T = Number(input[0])
let tIndex = 1

const move = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
]
const dfs = (x, y, _graph) => {
  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [x + move[i][0], y + move[i][1]]
    if (
      nx < 0 ||
      ny < 0 ||
      nx >= _graph.length ||
      ny >= _graph[0].length ||
      _graph[nx][ny] === 0
    ) {
      continue
    }
    _graph[nx][ny] = 0
    dfs(nx, ny, _graph)
  }
}

for (let tc = 0; tc < T; tc++) {
  const [m, n, k] = input[tIndex].split(" ").map(Number)
  tIndex += 1

  const graph = Array.from({ length: m }, () =>
    Array.from({ length: n }, () => 0),
  )

  for (let i = tIndex; i < k + tIndex; i++) {
    const [x, y] = input[i].split(" ").map(Number)
    graph[x][y] = 1
  }
  tIndex += k

  let answer = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (graph[i][j] === 1) {
        graph[i][j] = 0
        dfs(i, j, graph)
        answer += 1
      }
    }
  }
  console.log(answer)
}
