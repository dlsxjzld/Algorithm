const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])
const target = Number(input[1])

const board = Array.from({ length: n }, () =>
  Array.from({ length: n }, () => 1),
)

const start = Math.floor(n / 2)
let [sx, sy] = [start, start]
const move = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
] // 위 오 아 왼

let num = 1
let dir = 0
while (num < n) {
  if (num !== n - 1) {
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < num; j++) {
        let [nx, ny] = [sx + move[dir][0], sy + move[dir][1]]
        board[nx][ny] = board[sx][sy] + 1
        ;[sx, sy] = [nx, ny]
      }
      dir += 1
      dir %= 4
    }
  } else {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < num; j++) {
        let [nx, ny] = [sx + move[dir][0], sy + move[dir][1]]
        board[nx][ny] = board[sx][sy] + 1
        ;[sx, sy] = [nx, ny]
      }
      dir += 1
      dir %= 4
    }
  }
  num += 1
}
let answer = []
board.forEach((row, ridx) =>
  row.forEach((val, cidx) => {
    if (val === target) {
      answer = [ridx+1,cidx+1]
    }
  }),
)

console.log(board.map((row) => row.join(" ")).join("\n"))
console.log(answer.join(' '))