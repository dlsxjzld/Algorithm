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
  let index = 0

  while (queue.length > index) {
    const curr = queue[index++]

    for (let next of [curr - 1, curr + 1, curr * 2]) {
      if (next < 0 || next > 100000) continue
      if (graph[next] != -1) {
        if (next === curr * 2) {
          if (graph[next] > graph[curr]) {
            queue.push(next)
            graph[next] = graph[curr]
          }
        } else {
          if (graph[next] > graph[curr]) {
            queue.push(next)
            graph[next] = graph[curr] + 1
          }
        }
      } else {
        if (next === curr * 2) {
          queue.push(next)
          graph[next] = graph[curr]
        } else {
          queue.push(next)
          graph[next] = graph[curr] + 1
        }
      }
    }
  }
}

bfs(n)

console.log(graph[k])
