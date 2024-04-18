const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const T = Number(input.shift())

const move = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
]

const bfs = ({ i: sx, j: sy, graph: _graph, visited: _visited }) => {
  const queue = [[sx, sy]]

  _visited[sx][sy] = true
  let index = 0

  while (queue.length > index) {
    const [x, y] = queue[index++]

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + move[i][0], y + move[i][1]]
      if (
        nx < 0 ||
        nx >= _graph.length ||
        ny < 0 ||
        ny >= _graph[0].length ||
        _visited[nx][ny] ||
        _graph[nx][ny] === "."
      ) {
        continue
      }
      queue.push([nx, ny])
      _visited[nx][ny] = true
    }
  }
  return 1
}

for (let tc = 0; tc < T; tc++) {
  const [h, w] = input.shift().split(" ").map(Number)
  const graph = []
  const visited = Array.from({ length: h }, () =>
    Array.from({ length: w }, () => false),
  )

  for (let r = 0; r < h; r++) {
    graph.push(input.shift().split(""))
  }
  let cnt = 0
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (graph[i][j] === "#" && !visited[i][j]) {
        cnt += bfs({ i, j, graph, visited })
      }
    }
  }
  console.log(cnt)
}
