const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [R, C] = input[0].split(" ").map(Number)
const graph = input.slice(1).map((row) => row.split(""))

const visited = Array.from({ length: 26 }, () => false)
let answer = 1
visited[graph[0][0].charCodeAt() - 65] = true

const move = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
]
const dfs = (x, y, visited, cnt) => {
  answer = Math.max(answer, cnt)
  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [x + move[i][0], y + move[i][1]]
    if (
      nx < 0 ||
      ny < 0 ||
      nx >= R ||
      ny >= C ||
      visited[graph[nx][ny].charCodeAt() - 65]
    ) {
      continue
    }
    visited[graph[nx][ny].charCodeAt() - 65] = true
    dfs(nx, ny, visited, cnt + 1)
    visited[graph[nx][ny].charCodeAt() - 65] = false
  }
}

dfs(0, 0, visited, 1)
console.log(answer)
