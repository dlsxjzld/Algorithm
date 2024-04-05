const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [r, c] = input[0].split(" ").map(Number)
const graph = input.slice(1).map((row) => row.split(""))
// 울타리 설치 ->
// 늑대 주변에 설치 가능하면 성공
// 늑대 주변에 하나라도 양이 있으면 실패
// 1. 늑대 수가 0 -> 무조건 1

// bfs

const wolfPosition = []
const move = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
] // 동서남북

for (let i = 0; i < r; i++) {
  for (let j = 0; j < c; j++) {
    if (graph[i][j] === "W") {
      wolfPosition.push([i, j])
      for (let k = 0; k < 4; k++) {
        const [nx, ny] = [i + move[k][0], j + move[k][1]]
        if (nx >= 0 && ny >= 0 && nx < r && ny < c) {
          if (graph[nx][ny] === ".") {
            graph[nx][ny] = "D"
          }
        }
      }
    }
  }
}

const bfs = (_wolfPosition) => {
  const queue = [..._wolfPosition]

  let index = 0

  while (index < queue.length) {
    const [x, y] = queue[index]
    index += 1

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + move[i][0], y + move[i][1]]
      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < r &&
        ny < c &&
        graph[nx][ny] !== "D" &&
        graph[nx][ny] !== "W"
      ) {
        if (graph[nx][ny] === "S") {
          return 0
        }
        queue.push([nx, ny])
        graph[nx][ny] = "W"
      }
    }
  }

  return 1
}

const answer = bfs(wolfPosition)
console.log(answer)
if (answer) {
  console.log(graph.map((row) => row.join("")).join("\n"))
}
