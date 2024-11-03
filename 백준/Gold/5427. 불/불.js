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

const bfs = (start, graph, h, w, isFire = false) => {
  const visited = Array.from({ length: h }, () =>
    Array.from({ length: w }, () => Number.MAX_SAFE_INTEGER),
  )
  const queue = [...start]
  let index = 0
  for (let [x, y] of queue) {
    visited[x][y] = 1
  }

  while (queue.length > index) {
    const [x, y] = queue[index++]

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + move[i][0], y + move[i][1]]

      if (
        nx < 0 ||
        ny < 0 ||
        nx >= h ||
        ny >= w ||
        graph[nx][ny] == "#" ||
        visited[nx][ny] != Number.MAX_SAFE_INTEGER
      ) {
        continue
      }
      if (!isFire) {
        if (graph[nx][ny] == "*") {
          continue
        }
      }
      visited[nx][ny] = visited[x][y] + 1
      queue.push([nx, ny])
    }
  }
  return visited
}

const getAnswer = (target, fires, h, w) => {
  const answer = []
  for (let i = 0; i < w; i++) {
    if (target[0][i] < fires[0][i]) {
      answer.push(target[0][i])
    } else if (target[h - 1][i] < fires[h - 1][i]) {
      answer.push(target[h - 1][i])
    }
  }
  for (let i = 0; i < h; i++) {
    if (target[i][0] < fires[i][0]) {
      answer.push(target[i][0])
    } else if (target[i][w - 1] < fires[i][w - 1]) {
      answer.push(target[i][w - 1])
    }
  }
  if (answer.length > 0) {
    return Math.min(...answer)
  } else {
    return "IMPOSSIBLE"
  }
}

const T = Number(input[0])

let index = 1
for (let tc = 0; tc < T; tc += 1) {
  const [w, h] = input[index++].split(" ").map(Number)
  const graph = input.slice(index, index + h).map((row) => row.split(""))
  index += h

  const fires = []
  const target = []

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (graph[i][j] == "*") {
        fires.push([i, j])
      } else if (graph[i][j] == "@") {
        target.push([i, j])
      }
    }
  }
  const targetVisited = bfs(target, graph, h, w)
  const firesVisited = bfs(fires, graph, h, w, true)

  const targetDist = getAnswer(targetVisited, firesVisited, h, w)

  console.log(targetDist)
}
