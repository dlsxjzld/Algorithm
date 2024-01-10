const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, m] = input[0].split(" ").map(Number)

const graph = input.slice(1, 1 + n).map((row) => row.split(""))
const visited = Array.from({ length: n }, () =>
  Array.from({ length: m }, () => false),
)

let wolf = 0
let sheep = 0

let wolfResult = 0
let sheepResult = 0

const dx = [0, 0, 1, -1]
const dy = [1, -1, 0, 0]

const bfs = (x, y) => {
  const queue = []
  queue.push([x, y])

  while (queue.length > 0) {
    const [nx, ny] = queue.shift()
    if (graph[nx][ny] === "o") {
      sheep += 1
    }
    if (graph[nx][ny] === "v") {
      wolf += 1
    }
    for (let i = 0; i < 4; i++) {
      const nextX = nx + dx[i]
      const nextY = ny + dy[i]

      if (
        nextX < 0 ||
        nextY < 0 ||
        nextX >= n ||
        nextY >= m ||
        graph[nextX][nextY] === "#"
      ) {
        continue
      }
      if (!visited[nextX][nextY]) {
        visited[nextX][nextY] = true
        queue.push([nextX, nextY])
      }
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (graph[i][j] !== "#" && !visited[i][j]) {
      visited[i][j] = true
      bfs(i, j)

      sheep > wolf ? (sheepResult += sheep) : (wolfResult += wolf)
      wolf = 0
      sheep = 0
    }
  }
}

console.log(sheepResult, wolfResult)
