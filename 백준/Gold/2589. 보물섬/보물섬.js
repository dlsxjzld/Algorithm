const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, m] = input[0].split(" ").map(Number)
const graph = input.slice(1).map((row) => row.split(""))
let answer = -Infinity

const dx = [0, 0, -1, 1]
const dy = [-1, 1, 0, 0]

const bfs = (x, y) => {
  const visited = Array.from({ length: n }, () => Array(m).fill(false))
  visited[x][y] = true

  const queue = [[x, y, 0]]
  let index = 0

  while (queue.length > index) {
    const [x, y, dist] = queue[index++]
    answer = Math.max(answer, dist)

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i]
      const ny = y + dy[i]
      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue
      if (!visited[nx][ny] && graph[nx][ny] === "L") {
        queue.push([nx, ny, dist + 1])
        visited[nx][ny] = true
      }
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (graph[i][j] === "L") {
      bfs(i, j)
    }
  }
}

console.log(answer)
