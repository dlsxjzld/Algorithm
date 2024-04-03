const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [r, c, n] = input[0].split(" ").map(Number)
const graph = input.slice(1).map((row) => row.split(""))
const bomb_graph = Array.from({ length: r }, () =>
  Array.from({ length: c }, () => 0),
)

// 초기 폭탄 터지는 시간 저장
for (let i = 0; i < r; i++) {
  for (let j = 0; j < c; j++) {
    if (graph[i][j] === "O") {
      bomb_graph[i][j] = 3
    }
  }
}

const move = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
]

let time = 1
while (time <= n) {
  if (time % 2) {
    for (let i = 0; i < r; i++) {
      for (let j = 0; j < c; j++) {
        if (graph[i][j] === "O" && bomb_graph[i][j] === time) {
          graph[i][j] = "."
          bomb_graph[i][j] = 0
          for (let k = 0; k < 4; k++) {
            const [nx, ny] = [i + move[k][0], j + move[k][1]]
            if (
              nx < 0 ||
              ny < 0 ||
              nx >= r ||
              ny >= c ||
              bomb_graph[nx][ny] === time
            )
              continue
            graph[nx][ny] = "."
            bomb_graph[nx][ny] = 0
          }
        }
      }
    }
  } else {
    for (let i = 0; i < r; i++) {
      for (let j = 0; j < c; j++) {
        if (graph[i][j] === ".") {
          bomb_graph[i][j] = time + 3
          graph[i][j] = "O"
        }
      }
    }
  }
  time += 1
}

console.log(graph.map((row) => row.join("")).join("\n"))
