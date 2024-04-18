const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, m] = input[0].split(" ").map(Number)
const graph = Array.from({ length: n }, () =>
  Array.from({ length: m }, () => 0),
)
const rgb = input.slice(1, 1 + n).map((row) => row.split(" ").map(Number))

const average = Number(input[1 + n])

rgb.forEach((row, ridx) => {
  for (let i = 0; i < m; i++) {
    const pixel =
      (row[i * 3] + row[i * 3 + 1] + row[i * 3 + 2]) / 3 >= average ? 255 : 0
    graph[ridx][i] = pixel
  }
})

const move = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
]
const bfs = (sx, sy) => {
  const queue = [[sx, sy]]
  let index = 0

  while (queue.length > index) {
    const [x, y] = queue[index++]
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + move[i][0], y + move[i][1]]
      if (nx < 0 || nx >= n || ny < 0 || ny >= m || graph[nx][ny] === 0) {
        continue
      }
      graph[nx][ny] = 0
      queue.push([nx, ny])
    }
  }
  return 1
}

let answer = 0
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
     
    if (graph[i][j] === 255) {
      answer += bfs(i, j)
    }
  }
}

console.log(answer)
