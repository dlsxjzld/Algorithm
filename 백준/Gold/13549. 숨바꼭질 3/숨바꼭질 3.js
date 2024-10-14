const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, k] = input[0].split(" ").map(Number)
const MAX = 100_000
const graph = Array.from({ length: MAX + 1 }, () => -1)

const queue = [n]
graph[n] = 0
let index = 0
while (queue.length > index) {
  const cur = queue[index++]
  if (cur == k) continue

  for (let next of [cur - 1, cur + 1, cur * 2]) {
    if (next < 0 || next > MAX) continue
    if (graph[next] == -1) {
      if (next == cur * 2) {
        graph[next] = graph[cur]
      } else {
        graph[next] = graph[cur] + 1
      }
      queue.push(next)
    } else {
      if (next == cur * 2) {
        if (graph[next] > graph[cur]) {
          graph[next] = graph[cur]
            queue.push(next)
        }
      } else {
        if (graph[next] > graph[cur]+1) {
          graph[next] = graph[cur] + 1
            queue.push(next)
        }
      }
    }
  }
}

console.log(graph[k])
