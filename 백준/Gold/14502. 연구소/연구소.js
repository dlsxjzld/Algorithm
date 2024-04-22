const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, m] = input[0].split(" ").map(Number)
const graph = input.slice(1).map((row) => row.split(" ").map(Number))
const virusPosition = []
const dx = [0, 0, 1, -1]
const dy = [1, -1, 0, 0]

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (graph[i][j] == 2) {
      virusPosition.push([i, j])
    }
  }
}
let answer = 0

const virus = (_graph) => {
  const queue = [...virusPosition]
  let index = 0
  const newGraph = _graph.map((row) => row.map((val) => val))

  while (queue.length > index) {
    const [x, y] = queue[index++]

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i]
      const ny = y + dy[i]
      if (nx >= 0 && ny >= 0 && nx < n && ny < m && newGraph[nx][ny] == 0) {
        newGraph[nx][ny] = 2
        queue.push([nx, ny])
      }
    }
  }

  let safe = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (newGraph[i][j] == 0) {
        safe += 1
      }
    }
  }
  answer = Math.max(answer, safe)
}

const setWall = (_wall, _graph, prevR, prevC) => {
  if (_wall == 3) {
    virus(_graph)
    return
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i < prevR) continue
      if (i === prevR && j < prevC) continue
      if (_graph[i][j] == 0) {
        _graph[i][j] = 1
        setWall(_wall + 1, _graph, i, j)
        _graph[i][j] = 0
      }
    }
  }
}

setWall(0, graph, 0, 0)

console.log(answer)
