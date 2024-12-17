const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const move = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
]

const findAnswer = (fires, start, graph) => {
  let answer = Number.MAX_SAFE_INTEGER
  const w = graph.length
  const h = graph[0].length

  // 1행
  // 마지막 행
  for (let i = 0; i < h; i += 1) {
    if (fires[0][i] > start[0][i]) {
      answer = Math.min(answer, start[0][i])
    }
    if (fires[w - 1][i] > start[w - 1][i]) {
      answer = Math.min(answer, start[w - 1][i])
    }
  }
  // 1열
  // 마지막 열
  for (let i = 0; i < w; i += 1) {
    if (fires[i][0] > start[i][0]) {
      answer = Math.min(answer, start[i][0])
    }
    if (fires[i][h - 1] > start[i][h - 1]) {
      answer = Math.min(answer, start[i][h - 1])
    }
  }
  return answer === Number.MAX_SAFE_INTEGER ? "IMPOSSIBLE" : answer
}

const bfs = (pos, graph, isFire = false) => {
  const queue = [...pos]
  const w = graph.length
  const h = graph[0].length

  let index = 0
  const visited = Array.from({ length: w }, () =>
    Array.from({ length: h }, () => Number.MAX_SAFE_INTEGER),
  )

  for (let [x, y] of pos) {
    visited[x][y] = 1
  }

  while (queue.length > index) {
    const [x, y] = queue[index++]
    for (let i = 0; i < 4; i += 1) {
      const nx = x + move[i][0]
      const ny = y + move[i][1]
      if (
        nx < 0 ||
        ny < 0 ||
        nx >= w ||
        ny >= h ||
        graph[nx][ny] === "#" ||
        visited[nx][ny] <= visited[x][y] + 1
      ) {
        continue
      }

      if (!isFire && graph[nx][ny] === "*") {
        continue
      }
      visited[nx][ny] = visited[x][y] + 1
      queue.push([nx, ny])
    }
  }

  return visited
}

const T = Number(input[0])
let index = 1
for (let tc = 1; tc <= T; tc += 1) {
  const [w, h] = input[index++].split(" ").map(Number)
  const graph = input.slice(index, index + h).map((row) => row.split(""))
  index += h

  const firesPositions = []
  const startPositions = []
  for (let i = 0; i < h; i += 1) {
    for (let j = 0; j < w; j += 1) {
      if (graph[i][j] === "*") {
        firesPositions.push([i, j])
      } else if (graph[i][j] === "@") {
        startPositions.push([i, j])
      }
    }
  }

  const firesVisited = bfs(firesPositions, graph, true)
  const startVisited = bfs(startPositions, graph)

  // 상근이는 무조건 불이 붙는데 걸린 시간보다 적게 걸려야함. 같거나 크면 탈출 불가
  console.log(findAnswer(firesVisited, startVisited, graph))
}
