const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, m] = input[0].split(" ").map(Number)
const graph = Array.from({ length: n + 1 }, () => [])
const visited = Array.from({ length: n + 1 }, () => false)

for (let i = 1; i < 1 + m; i++) {
  const [u, v] = input[i].split(" ").map(Number)
  graph[u].push(v)
  graph[v].push(u)
}

const dfs = (start) => {
  if (visited[start]) return 0
  visited[start] = true

  for (let next of graph[start]) {
    if (!visited[next]) {
      dfs(next)
    }
  }
  return 1
}
let answer = 0
for (let i = 1; i < n + 1; i++) {
  answer += dfs(i)
}

console.log(answer)
