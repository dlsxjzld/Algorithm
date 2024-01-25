const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

// 한 도시에서 다른 모든 도시에 대한 거리
// 다익스트라

const [n, m, k, x] = input[0].split(" ").map(Number)
const graph = Array.from({ length: n + 1 }, () => [])
const distance = Array.from({ length: n + 1 }, () => 0)
const answer = []

input.slice(1, 1 + m).forEach((val) => {
  const [from, to] = val.split(" ").map(Number)
  graph[from].push(to)
})

function bfs(start) {
  const queue = [start]
  distance[start] = 1

  while (queue.length > 0) {
    const startNode = queue.shift()
    if (distance[startNode] === k+1) {
      answer.push(startNode)
      continue
    }
    for (let nextNode of graph[startNode]) {
      if (distance[nextNode] === 0) {
        distance[nextNode] = distance[startNode] + 1
        queue.push(nextNode)
      }
    }
  }
}

bfs(x)


if (answer.length === 0) {
  console.log(-1)
} else {
    answer.sort((a, b) => a - b)
  answer.forEach((val) => console.log(val))
}
