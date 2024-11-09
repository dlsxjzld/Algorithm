const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

let index = 0
const move = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
]
const answer = []
let problem = 1

const bfs = (sx, sy, N, graph) => {
  const queue = [[sx, sy]]
  const distance = Array.from({ length: N }, () =>
    Array.from({ length: N }, () => Number.MAX_SAFE_INTEGER),
  )
  distance[sx][sy] = graph[sx][sy]
  let index = 0

  while (queue.length > index) {
    const [x, y] = queue[index++]
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + move[i][0], y + move[i][1]]
      if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue
      if (distance[nx][ny] > distance[x][y] + graph[nx][ny]) {
        distance[nx][ny] = distance[x][y] + graph[nx][ny]
        queue.push([nx, ny])
      }
    }
  }
  return distance[N - 1][N - 1]
}
while (true) {
  const N = Number(input[index++])
  if (N === 0) break
  const graph = input
    .slice(index, index + N)
    .map((row) => row.split(" ").map(Number))
  index += N
  const dist = bfs(0, 0, N, graph)

  answer.push(`Problem ${problem}: ${dist}`)
  problem+=1
}
console.log(answer.join("\n"))
