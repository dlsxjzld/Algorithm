const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const col = {
  A: 0,
  B: 1,
  C: 2,
  D: 3,
  E: 4,
  F: 5,
}

const row = {
  1: 0,
  2: 1,
  3: 2,
  4: 3,
  5: 4,
  6: 5,
}

const [y, x] = input[0].split("")
let startRow = row[x]
let startCol = col[y]
let prevRow = row[x]
let prevCol = col[y]
const target = new Set(input)
const visited = Array.from({ length: 6 }, () =>
  Array.from({ length: 6 }, () => false),
)
visited[row[x]][row[y]] = true
let answer = "Invalid"

if (target.size != 36) {
  console.log(answer)
  return
}

for (let i = 1; i < 36; i += 1) {
  const [c, r] = input[i].split("")
  const [curX, curY] = [row[r], col[c]]
  if (
    (Math.abs(curX - prevRow) === 1 && Math.abs(curY - prevCol) === 2) ||
    (Math.abs(curX - prevRow) === 2 && Math.abs(curY - prevCol) === 1)
  ) {
    if (visited[curX][curY]) {
      answer = "Invalid"
      break
    }
    visited[curX][curY] = true
    prevRow = curX
    prevCol = curY
  } else {
    answer = "Invalid"
    break
  }
}
const [lastY, lastX] = input[35].split("")
if (
  visited[row[lastX]][col[lastY]] &&
  ((Math.abs(row[lastX] - startRow) === 1 &&
    Math.abs(col[lastY] - startCol) === 2) ||
    (Math.abs(row[lastX] - startRow) === 2 &&
      Math.abs(col[lastY] - startCol) === 1))
) {
  answer = "Valid"
  
} else {

  answer = "Invalid"
}
console.log(answer)
