const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, m] = input[0].split(" ").map(Number)
const graph = input.slice(1, 1 + m).map((row) => row.split(""))
const visited = Array.from({ length: m }, () =>
  Array.from({ length: n }, () => false),
)

const dx = [0, 0, 1, -1]
const dy = [1, -1, 0, 0]

function bfs(sx, sy, soldier) {
  const queue = [[sx, sy]]
  let cnt = 1

  while (queue.length > 0) {
    const [x, y] = queue.shift()

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i]
      const ny = y + dy[i]

      if (
        nx < 0 ||
        ny < 0 ||
        nx >= m ||
        ny >= n ||
        graph[nx][ny] !== soldier ||
        visited[nx][ny] === true
      )
        continue

      visited[nx][ny] = true
      queue.push([nx, ny])
      cnt += 1
    }
  }
  return cnt * cnt
}

let W = 0
let B = 0

for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (!visited[i][j]) {
      if (graph[i][j] === "W") {
        visited[i][j] = true
        W += bfs(i, j, "W")
      }
      if (graph[i][j] === "B") {
        visited[i][j] = true
        B += bfs(i, j, "B")
      }
    }
  }
}

console.log(W, B)
