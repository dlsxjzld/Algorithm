const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, m, r] = input[0].split(" ").map(Number)
const graph = Array.from({ length: n + 1 }, () => [])
const visited = Array.from({ length: n + 1 }, () => false)
const answer = Array.from({ length: n + 1 }, () => 0)
const data = input.slice(1, 1 + m).map((row) => row.split(" ").map(Number))

for (let [u, v] of input
  .slice(1, 1 + m)
  .map((row) => row.split(" ").map(Number))) {
  graph[u].push(v)
  graph[v].push(u)
}

const sortedGraph = graph.map((row) => row.sort((a, b) => b - a))
let cnt = 1

const dfs = (start) => {
  if (!visited[start]) {
    visited[start] = true
    answer[start] = cnt
    cnt += 1
    for (let node of sortedGraph[start]) {
      dfs(node)
    }
  }
}
dfs(r)

console.log(answer.slice(1).join("\n"))
