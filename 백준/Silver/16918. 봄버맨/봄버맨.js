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

graph.forEach((row, r) =>
  row.forEach((val, c) => {
    if (graph[r][c] === "O") {
      bomb_graph[r][c] = 3
    }
  }),
)
const dx = [0, 0, 1, -1]
const dy = [1, -1, 0, 0]

const goBomb = () => {
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (graph[i][j] === "O" && bomb_graph[i][j] === time) {
        graph[i][j] = "."
        for (let k = 0; k < 4; k++) {
          const nx = i + dx[k]
          const ny = j + dy[k]

          if (
            nx < 0 ||
            ny < 0 ||
            nx >= r ||
            ny >= c ||
            bomb_graph[nx][ny] === time
          ) {
            continue
          }
          graph[nx][ny] = "."
          bomb_graph[nx][ny] = 0
        }
      }
    }
  }
}

const setBomb = () => {
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (graph[i][j] === ".") {
        graph[i][j] = "O"
        bomb_graph[i][j] = time + 3
      }
    }
  }
}

let time = 1
while (time <= n) {
  if (time % 2) {
    goBomb(graph)
  } else {
    setBomb(graph)
  }
  time++
}

console.log(graph.map((row) => row.join("")).join("\n"))
