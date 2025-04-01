const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n] = input[0].split(" ").map(Number)
const graph = input.slice(1).map((row) => row.split(" ").map(Number))
const board = Array.from({ length: n }, () =>
  Array.from({ length: n }, () => false),
)

const move = [
  [0, 1],
  [1, 0],
]

const bfs = () => {
  const queue = [[0, 0]]
  board[0][0] = true

  let index = 0
  while (queue.length > index) {
    const [x, y] = queue[index++]
    const cur = graph[x][y]
    for (const [dx, dy] of move) {
      const nx = x + dx * cur
      const ny = y + dy * cur
      if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
        if (board[nx][ny] === false) {
          board[nx][ny] = true
          queue.push([nx, ny])
        }
      }
    }
  }
}

bfs()
console.log(board[n - 1][n - 1] === true ? "HaruHaru" : "Hing")
