const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

// 홀수인 자연수
// 1 ~ n**2
// n*n
// 3<= n <= 999

const n = Number(input[0])
const target = Number(input[1])
const board = Array.from({ length: n }, () =>
  Array.from({ length: n }, () => 0),
)
const direction = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
] // 위 오 아 왼
let r = Math.floor(n / 2)
let c = Math.floor(n / 2)

board[r][c] = 1
let directionCnt = 0
let number = 2
const targetIndex = { r:r+1, c:c+1 }

for (let i = 2; i < 2 * n + 1; i++) {
  const step = i == 2 * n ? i / 2 - 1 : Math.floor(i / 2)

  for (let j = 0; j < step; j++) {
    r += direction[directionCnt][0]
    c += direction[directionCnt][1]
    board[r][c] = number
    if (target === number) {
      targetIndex.r = r + 1
      targetIndex.c = c + 1
    }
    number += 1
  }
  directionCnt = (directionCnt + 1) % 4
}

console.log(board.map((row) => row.join(" ")).join("\n"))
console.log(targetIndex.r, targetIndex.c)
