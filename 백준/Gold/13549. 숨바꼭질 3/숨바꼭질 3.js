const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, k] = input[0].split(" ").map(Number)
const MAX = 100_001

const visited = Array(MAX).fill(0)

visited[n] = 1

const queue = [n]
let index = 0

while (queue.length > index) {
  const curr = queue[index++]
  if (curr === k) {
    continue
  }

  for (let next of [curr - 1, curr + 1, curr * 2]) {
    if (next < 0 || next >= MAX) continue
    if (!visited[next]) {
      if (next === curr * 2) {
        visited[next] = visited[curr]
      } else if (next === curr - 1 || next === curr + 1) {
        visited[next] = visited[curr] + 1
      }
      queue.push(next)
    } else {
      if (next === curr * 2) {
        if (visited[next] > visited[curr]) {
          visited[next] = visited[curr]
          queue.push(next)
        }
      } else if (next === curr - 1 || next === curr + 1) {
        if (visited[next] > visited[curr] + 1) {
          visited[next] = visited[curr] + 1
          queue.push(next)
        }
      }
    }
  }
}

console.log(visited[k] - 1)
