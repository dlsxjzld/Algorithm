const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])
const relation = Number(input[1])

const graph = Array.from({ length: n + 1 }, () => [])
const visited = Array.from({ length: n + 1 }, () => false)

input.slice(2, 2 + relation).forEach((value) => {
  const [a, b] = value.split(" ").map(Number)
  graph[a].push(b)
  graph[b].push(a)
})

let cnt = 0

function dfs(start) {
  if (visited[start]) return
  visited[start] = true

  graph[start].forEach((computer) => {
    if (visited[computer]) return
    cnt += 1
    dfs(computer)
  })
}

dfs(1)
console.log(cnt)