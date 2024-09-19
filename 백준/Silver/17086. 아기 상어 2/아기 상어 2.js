const input = 
  require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, m] = input[0].split(" ").map(Number)
const board = input.slice(1).map((row) => row.split(" ").map(Number))
const visited = Array.from({ length: n }, () =>
  Array.from({ length: m }, () => false),
)
const move = [
  [0, 1],
  [1, 1],
  [1, 0],
  [1, -1],
  [0, -1],
  [-1, -1],
  [-1, 0],
  [-1, 1],
]
const sharks = []
board.forEach((row, r) =>
  row.forEach((val, c) => {
    if (val === 1) {
      sharks.push([r, c])
      visited[r][c] = true
    }
  }),
)

const bfs = (sharks, board, visited) => {
  const queue = [...sharks]
  let index = 0
  while (queue.length > index) {
    const [x, y] = queue[index++]

    for (let i = 0; i < 8; i++) {
      const [nx, ny] = [x + move[i][0], y + move[i][1]]

      if (nx < 0 || ny < 0 || nx >= n || ny >= m || visited[nx][ny]) continue
      queue.push([nx, ny])
      visited[nx][ny] = true
      board[nx][ny] = board[x][y] + 1
    }
  }
}
bfs(sharks, board, visited)

const answer = Math.max(...board.flatMap((row) => row)) - 1
console.log(answer)
