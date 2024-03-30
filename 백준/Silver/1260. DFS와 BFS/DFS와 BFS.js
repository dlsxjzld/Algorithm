const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, m, v] = input[0].split(" ").map(Number)
const graph = Array.from({ length: n + 1 }, () => [])
const visitedDfs = Array.from({ length: n + 1 }, () => false)
const visitedBfs = Array.from({ length: n + 1 }, () => false)

input.slice(1).forEach((row) => {
  const [x, y] = row.split(" ").map(Number)
  graph[x].push(y)
  graph[y].push(x)
})

graph.forEach((row) => row.sort((a, b) => a - b))

const dfsAnswer = [v]
const bfsAnswer = [v]

const dfs = (start) => {
  visitedDfs[start] = true

  for (let next of graph[start]) {
    if (!visitedDfs[next]) {
      visitedDfs[next] = true
      dfsAnswer.push(next)
      dfs(next)
    }
  }
}

const bfs = (start) => {
  visitedBfs[start] = true
  const queue = [start]

  while (queue.length > 0) {
    const curr = queue.shift()

    for (let next of graph[curr]) {
      if (!visitedBfs[next]) {
        visitedBfs[next] = true
        bfsAnswer.push(next)
        queue.push(next)
      }
    }
  }
}

dfs(v)
bfs(v)

console.log(dfsAnswer.join(" "))
console.log(bfsAnswer.join(" "))
