const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, m] = input[0].split(" ").map(Number)
const graph = input.slice(1).map((row) => row.split("").map(Number))

const bfs = () => {
  const queue = [[0, 0]]
  const move = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
  ]

  while (queue.length > 0) {
    const [x, y] = queue.shift()
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + move[i][0], y + move[i][1]]
      if (nx >= 0 && ny >= 0 && nx < n && ny < m && graph[nx][ny] === 1) {
        graph[nx][ny] = graph[x][y] + 1
        queue.push([nx, ny])
      }
    }
  }
}

bfs()

console.log(graph[n - 1][m - 1])
