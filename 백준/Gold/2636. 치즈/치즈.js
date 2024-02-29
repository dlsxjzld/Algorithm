const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, m] = input[0].split(" ").map(Number)
const graph = input.slice(1).map((row) => row.split(" ").map(Number))

const move = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
]

const bfs = () => {
  const queue = [[0, 0]]
  const visited = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => false),
  )

  visited[0][0] = true

  const del = []


  while (queue.length > 0) {
    const [x, y] = queue.shift()
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + move[i][0], y + move[i][1]]
      if (nx >= 0 && ny >= 0 && nx < n && ny < m && !visited[nx][ny]) {
        if (graph[nx][ny] === 1) {
          del.push([nx, ny])
          visited[nx][ny] = true
          continue
        }
        queue.push([nx,ny])
        visited[nx][ny] = true
      }
    }
  }

  for (let [x, y] of del) {
    graph[x][y] = 0
  }
  if (del.length === 0) {
    return true
  }

  num = del.length
  return false
}

let time = 0
let num = 0

while (true) {
  if (bfs()) {
    console.log(time)
    console.log(num)
    break
  }
  time += 1
}
