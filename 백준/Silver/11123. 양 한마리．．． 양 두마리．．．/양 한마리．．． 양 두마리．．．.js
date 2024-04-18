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

const bfs = ({ i: sx, j: sy, graph: _graph }) => {
  const queue = [[sx, sy]]

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
        _graph[nx][ny] === "."
      ) {
        continue
      }
      queue.push([nx, ny])
      _graph[nx][ny] = "."
    }
  }
}

for (let tc = 0; tc < T; tc++) {
  const [h, w] = input.shift().split(" ").map(Number)
  const graph = []

  for (let r = 0; r < h; r++) {
    graph.push(input.shift().split(""))
  }
  let cnt = 0
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (graph[i][j] === "#") {
        bfs({ i, j, graph })
        cnt++
      }
    }
  }
  console.log(cnt)
}
