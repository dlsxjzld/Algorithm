const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, k] = input[0].split(" ").map(Number)

const graph = Array(100001).fill(-1)
graph[n] = 0

const bfs = (start) => {
  const queue = [start]

  while (queue.length > 0) {
    const curr = queue.shift()

    for (let next of [curr - 1, curr + 1, curr * 2]) {
      if (next < 0 || next > 100000 || graph[next] != -1) continue
      if (next === curr * 2) {
        queue.unshift(next)
        graph[next] = graph[curr]
      } else {
        queue.push(next)
        graph[next] = graph[curr] + 1
      }
    }
  }
}

bfs(n)

console.log(graph[k])
