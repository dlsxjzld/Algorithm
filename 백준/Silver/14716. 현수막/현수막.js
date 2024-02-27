const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, m] = input[0].split(" ").map(Number)
const graph = input.slice(1, 1 + n).map((row) => row.split(" ").map(Number))
const visited = Array.from({ length: n }, () =>
  Array.from({ length: m }, () => false),
)

const move = [
  [-1, 0],
  [-1, 1],
  [0, 1],
  [1, 1],
  [1, 0],
  [1, -1],
  [0, -1],
  [-1, -1],
]

let cnt = 0

const bfs = (start) => {
  const queue = [start]

  while (queue.length > 0) {
    const [x, y] = queue.shift()

    for (let [dx, dy] of move) {
      const [nx, ny] = [x + dx, y + dy]
      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < n &&
        ny < m &&
        !visited[nx][ny] &&
        graph[nx][ny] === 1
      ) {
        visited[nx][ny] = true
        queue.push([nx, ny])
      }
    }
  }

  return 1
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (!visited[i][j] && graph[i][j] === 1) {
      visited[i][j] = true
      cnt += bfs([i, j])
    }
  }
}

console.log(cnt)