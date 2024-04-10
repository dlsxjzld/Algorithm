const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

let index = 0
const move = [
  [0, 1], // 동
  [1, 1], // 남동
  [1, 0], //남
  [1, -1], //남서
  [0, -1], // 서
  [-1, -1], // 북서
  [-1, 0], // 북
  [-1, 1], // 북동
]
const dfs = (x, y, _graph, _visited) => {
  if (x < 0 || x >= _graph.length || y < 0 || y >= _graph[0].length) {
    return
  }
  if (_visited[x][y] || _graph[x][y] === 0) {
    return
  }
  _visited[x][y] = true
  dfs(x - 1, y, _graph, _visited)
  dfs(x + 1, y, _graph, _visited)
  dfs(x, y - 1, _graph, _visited)
  dfs(x, y + 1, _graph, _visited)
  dfs(x + 1, y + 1, _graph, _visited)
  dfs(x + 1, y - 1, _graph, _visited)
  dfs(x - 1, y - 1, _graph, _visited)
  dfs(x - 1, y + 1, _graph, _visited)
  return true
}

while (true) {
  const [w, h] = input[index].split(" ").map(Number)
  if (w === 0 || h === 0) {
    break
  }
  index += 1

  const graph = []

  for (let i = 0; i < h; i++) {
    graph.push(input[index].split(" ").map(Number))
    index++
  }

  const visited = Array.from({ length: h }, () =>
    Array.from({ length: w }, () => false),
  )

  let answer = 0
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (graph[i][j] === 1 && !visited[i][j]) {
        if (dfs(i, j, graph, visited)) {
          answer += 1
        }
      }
    }
  }

  console.log(answer)
}
