const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])
const m = Number(input[1])
const graph = Array.from({ length: n + 1 }, () =>
  Array.from({ length: n + 1 }, () => Infinity),
)
const busList = input.slice(2, 2 + m).map((row) => row.split(" ").map(Number))
const [startCity, endCity] = input[2 + m].split(" ").map(Number)

busList.forEach(([start, end, cost]) => {
  graph[start][end] = Math.min(graph[start][end], cost)
})

const distance = Array(n + 1).fill(Infinity)
distance[startCity] = 0

const queue = [[startCity]]

while (queue.length > 0) {
  const [currentCity] = queue.shift()

  for (let i = 1; i <= n; i++) {
    if (graph[currentCity][i] !== Infinity) {
      if (distance[i] > graph[currentCity][i] + distance[currentCity]) {
        distance[i] = graph[currentCity][i] + distance[currentCity]
        queue.push([i])
      }
    }
  }
}

console.log(distance[endCity])
