const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [m, n] = input[0].split(" ").map(Number)
const graph = input.slice(1, 1 + m).map((row) => row.split("").map(Number))
const visited = Array.from({ length: m }, () =>
  Array.from({ length: n }, () => false),
)

// row === 0 -> start
// row === m-1 -> end


const dx = [0, 0, 1, -1]
const dy = [1, -1, 0, 0]

function bfs(sx, sy) {
  const queue = [[sx, sy]]
  visited[sx][sy] = true

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
        graph[nx][ny] === 1 ||
        visited[nx][ny]
      )
        continue
      queue.push([nx, ny])
      visited[nx][ny] = true
    }
  }
}

for (let col = 0; col < n; col++) {
  if (graph[0][col] === 0 && visited[0][col] === false) {
    bfs(0, col)
  }
}


const getResult = () => {
  for (let col = 0; col < n; col++) {
    if (visited[m - 1][col]) {
      return "YES"
    }
  }
  return "NO"
}
const result = getResult()

console.log(result)
