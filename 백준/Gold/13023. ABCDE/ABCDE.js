const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, m] = input[0].split(" ").map(Number)
const relationships = input.slice(1).map((row) => row.split(" ").map(Number))
const graph = Array.from({ length: n }, () => [])
relationships.forEach(([a, b]) => {
  graph[a].push(b)
  graph[b].push(a)
})
// A는 B와 친구다.
// B는 C와 친구다.
// C는 D와 친구다.
// D는 E와 친구다.

let answer = 0

const dfs = (start, graph, count, visited) => {
  if (answer === 1 || count > 5) {
    return
  }
  if (count === 5) {
    answer = 1
    return
  }
  for (let next of graph[start]) {
    if (!visited[next]) {
      visited[next] = true
      dfs(next, graph, count + 1, visited)
      visited[next] = false
    }
  }
}

const visited = Array.from({ length: n }, () => false)
for (let i = 0; i < n; i += 1) {
  if (!visited[i]) {
    visited[i] = true
    dfs(i, graph, 1, visited)
    visited[i] = false
  }
}

console.log(answer)
