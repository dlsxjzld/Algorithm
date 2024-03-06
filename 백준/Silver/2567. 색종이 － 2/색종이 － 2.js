const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
// x    y
// 3 13 7 17
// 5 15 2 12
// 15 25 7 17
// 13 23 14 24

// min = 3 max = 25
// min 2 max 24

const n = Number(input[0])
const board = Array.from({ length: 101 }, () =>
  Array.from({ length: 101 }, () => 0),
)
const visited = Array.from({ length: 101 }, () =>
  Array.from({ length: 101 }, () => false),
)

for (let i = 1; i < n + 1; i++) {
  const [fx, fy] = input[i].split(" ").map(Number)
  for (let r = 0; r < 10; r++) {
    for (let c = 0; c < 10; c++) {
      board[fx + r][fy + c] = 1
    }
  }
}

let total = 0
for (let i = 0; i < 101; i++) {
  for (let j = 0; j < 101; j++) {
    if (i - 1 >= 0 && board[i][j] == 1 && board[i - 1][j] == 0) total += 1
    if (i + 1 < 101 && board[i][j] == 1 && board[i + 1][j] == 0) total += 1
    if (j - 1 >= 0 && board[i][j] == 1 && board[i][j - 1] == 0) total += 1
    if (j + 1 < 101 && board[i][j] == 1 && board[i][j + 1] == 0) total += 1
  }
}
console.log(total)
