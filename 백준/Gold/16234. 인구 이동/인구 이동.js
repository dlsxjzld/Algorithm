const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [N, L, R] = input[0].split(" ").map(Number)
const countries = input.slice(1).map((row) => row.split(" ").map(Number))
let day = 0
const move = [
  [1, 0],
  [-1, 0],
  [0, -1],
  [0, 1],
]

const bfs = (sx, sy, N, L, R, graph, visited) => {
  const queue = [[sx, sy]]
  let index = 0

  while (queue.length > index) {
    const [x, y] = queue[index++]

    for (let i = 0; i < 4; i++) {
      const nx = x + move[i][0]
      const ny = y + move[i][1]

      if (nx < 0 || ny < 0 || nx >= N || ny >= N || visited[nx][ny]) continue
      // graph[nx][ny] 와 차이가 L이상 R이하면 방문해야할 배열에 넣기
      const diff = Math.abs(graph[x][y] - graph[nx][ny])
      if (diff < L || diff > R) continue

      visited[nx][ny] = true
      queue.push([nx, ny])
    }
  }
  return queue
}

while (true) {
  const visited = Array.from({ length: N }, () =>
    Array.from({ length: N }, () => false),
  ) // diff 비교해야함
  const targets = []
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j]) {
        visited[i][j] = true

        const needVisit = bfs(i, j, N, L, R, countries, visited)

        if (needVisit.length !== 1) {
          targets.push([...needVisit])
        }
      }
    }
  }
  targets.forEach((queue) => {
    const newHumanCount = Math.floor(
      queue.reduce((acc, cur) => acc + countries[cur[0]][cur[1]], 0) /
        queue.length,
    )
    for (const [x, y] of queue) {
      countries[x][y] = newHumanCount
    }
  })

  if (targets.length === 0) {
    break
  }

  day += 1
}
console.log(day)
