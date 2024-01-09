const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const T = Number(input.shift())

const inputTestcase = input.map((row) => row.split(" ").map(Number))

const dx = [0, 0, 1, -1]
const dy = [1, -1, 0, 0]
const dfs = (x, y, graph) => {
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i]
    const ny = y + dy[i]
    if (
      nx < 0 ||
      ny < 0 ||
      nx >= graph.length ||
      ny >= graph[0].length ||
      graph[nx][ny] === 0
    )
      continue
    if (graph[nx][ny] === 1) {
      graph[nx][ny] = 0
      dfs(nx, ny, graph)
    }
  }
}
const answer = []

for (let i = 0; i < T; i++) {
  const [M, N, K] = inputTestcase.shift()
  
  const graph = Array.from({ length: M }, () =>
    Array.from({ length: N }, () => 0),
  )

  let cnt = 0
  for (let j = 0; j < K; j++) {
    const [x, y] = inputTestcase.shift()
    graph[x][y] = 1
  }

  for (let r = 0; r < M; r++) {
    for (let c = 0; c < N; c++) {
      if (graph[r][c] === 1) {
        graph[r][c] = 0
        dfs(r, c, graph)
        cnt += 1
      }
    }
  }
  answer.push(cnt)
}

answer.forEach((val) => console.log(val))
