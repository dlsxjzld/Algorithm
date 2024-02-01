const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [r, c] = input[0].split(" ").map(Number)

const graph = input.slice(1, 1 + r).map((row) => row.split(""))
const visited = Array.from({ length: r }, () =>
  Array.from({ length: c }, () => false),
)

const dx = [0, 0, 1, -1]
const dy = [1, -1, 0, 0]
const checkAlphabet = new Set()

let cnt = 1
visited[0][0] = true
checkAlphabet.add(graph[0][0])

const moveGraph = (sx, sy, newCnt) => {
  for (let i = 0; i < 4; i++) {
    const nx = sx + dx[i]
    const ny = sy + dy[i]

    if (
      nx >= 0 &&
      ny >= 0 &&
      nx < r &&
      ny < c &&
      !visited[nx][ny] &&
      !checkAlphabet.has(graph[nx][ny])
    ) {
      visited[nx][ny] = true
      checkAlphabet.add(graph[nx][ny])
      moveGraph(nx, ny, newCnt + 1)
      cnt = Math.max(cnt, newCnt + 1)
      checkAlphabet.delete(graph[nx][ny])
      visited[nx][ny] = false
    }
  }
}

moveGraph(0, 0, 1)
console.log(cnt)
