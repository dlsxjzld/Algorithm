const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [N, M] = input[0].split(" ").map(Number)
const graph = Array.from({ length: N + 1 }, () => [])
const visited = Array.from({ length: N + 1 }, () => false)
let cnt = 0

for (let i = 1; i < M + 1; i++) {
  const [u, v] = input[i].split(" ").map(Number)
  graph[u].push(v)
  graph[v].push(u)
}

const dfs = (node) => {
  for (nextNode of graph[node]) {
    if (!visited[nextNode]) {
      visited[nextNode] = true
      dfs(nextNode)
    }
  }
}

for (let i = 1; i < N + 1; i++) {
  if (!visited[i]) {
    visited[i] = true
    dfs(i)
    cnt += 1
  }
}
console.log(cnt)
