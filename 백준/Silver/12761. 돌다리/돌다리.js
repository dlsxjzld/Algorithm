const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const graph = Array.from({ length: 100_001 }, () => -1)
const [a, b, n, m] = input[0].split(" ").map(Number)

graph[n] = 0
function bfs(big, small) {
  const queue = [n]
  let index = 0
  while (queue.length > index) {
    const cur = queue[index++]
    if (cur === m) {
      return graph[m]
    }

    for (let next of [
      cur * big,
      cur * small,
      cur + big,
      cur + small,
      cur + 1,
      cur - 1,
      cur - big,
      cur - small,
    ]) {
      if (
        next <= 0 ||
        next > 100_000 ||
        (graph[next] !== -1 && graph[next] < graph[cur] + 1)
      ) {
        continue
      }
      if (graph[next] === -1 || graph[next] > graph[cur] + 1) {
        graph[next] = graph[cur] + 1
        queue.push(next)
      }
    }
  }
}

if (a > b) {
  console.log(bfs(a, b))
} else {
  console.log(bfs(b, a))
}
