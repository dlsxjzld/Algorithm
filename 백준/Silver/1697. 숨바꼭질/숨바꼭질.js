const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, k] = input[0].split(" ").map(Number)
const visited = Array(100001).fill(false)

const queue = [[n, 0]]
visited[n] = true
let index = 0

while (queue.length > index) {
  const [curr, dist] = queue[index++]
  if (curr === k) {
    console.log(dist)
    break
  }

  for (let next of [curr - 1, curr + 1, curr * 2]) {
    if (next < 0 || next > 100000 || visited[next]) {
      continue
    }

    visited[next] = true
    queue.push([next, dist + 1])
  }
}
