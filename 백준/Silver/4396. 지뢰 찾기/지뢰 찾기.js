const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])

const mines = input.slice(1, 1 + n).map((row) => row.split(""))
const choices = input.slice(1 + n).map((row) => row.split(""))
const graph = mines.map((row) => row.map(() => "."))

// 지뢰 눌렀는지 확인
const pressMines = (mines, choices) => {
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (mines[i][j] === "*" && choices[i][j] === "x") {
        return true
      }
    }
  }
  return false
}
const start = (graph, mines, choices) => {
  let flag = pressMines(mines, choices)
  getGraph(graph, mines, choices)
  if (flag) {
    getMines(graph, mines)
  }
  console.log(graph.map((row) => row.join("")).join("\n"))
}

// 1. 지뢰 누른 경우
const getMines = (graph, mines) => {
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (mines[i][j] === "*") {
        graph[i][j] = "*"
      }
    }
  }
}
// 2. 지뢰 안누른 경우

const direction = [
  [-1, 0],
  [-1, 1],
  [0, 1],
  [1, 1],
  [1, 0],
  [1, -1],
  [0, -1],
  [-1, -1],
]
const check = (mines, x, y) => {
  let cnt = 0
  direction.forEach(([nx, ny]) => {
    if (x + nx < 0 || x + nx >= n || y + ny < 0 || y + ny >= n) {
      return
    }
    if (mines[x + nx][y + ny] === "*") {
      cnt += 1
    }
  })
  return cnt
}
const getGraph = (graph, mines, choices) => {
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (choices[i][j] === "x") {
        graph[i][j] = check(mines, i, j)
      }
    }
  }
}
start(graph, mines, choices)
