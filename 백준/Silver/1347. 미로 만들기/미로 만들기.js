const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

// 남쪽을 보며 서있다

// 직사각형 격자 모양
// 이동 가능 : '.'
// 벽 : '#'
// F 한 칸 앞으로
// LR 은 방향 회전

// 움직인 곳 .
// 나머지 빈 칸 벽

const actionCnt = Number(input[0])
const actions = input[1].split("")

const direction = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
] // 남 동 북 서
let myDirection = 0

const changeDirection = (direct, myDirect) => {
  let newDirect = null
  if (direct === "L") {
    newDirect = (myDirect + 1) % 4
  } else {
    if (myDirect === 0) newDirect = 3
    else {
      newDirect = (myDirect - 1) % 4
    }
  }
  return newDirect
}

let row = 0
let col = 0

let maxR = -Infinity
let maxC = -Infinity

let minR = Infinity
let minC = Infinity

const position = [[0, 0]]

for (let i = 0; i < actionCnt; i++) {
  const action = actions[i]

  if (action === "L" || action === "R") {
    myDirection = changeDirection(action, myDirection)
  } else {
    if (myDirection === 0) {
      row += 1
    } else if (myDirection === 1) {
      col += 1
    } else if (myDirection === 2) {
      row -= 1
    } else if (myDirection === 3) {
      col -= 1
    }
    position.push([row, col])
  }
}

for (let pos of position) {
  const [x, y] = pos
  maxR = Math.max(x, maxR)
  minR = Math.min(x, minR)
  maxC = Math.max(y, maxC)
  minC = Math.min(y, minC)
}

const graph = Array.from({ length: maxR - minR + 1 }, () =>
  Array.from({ length: maxC - minC + 1 }, () => "#"),
)

for (let pos of position) {
  const [x, y] = pos
  graph[x - minR][y - minC] = "."
}

console.log(graph.map((row) => row.join("")).join("\n"))
