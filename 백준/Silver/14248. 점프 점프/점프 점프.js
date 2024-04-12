const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])
const distance = input[1].split(" ").map(Number)
const visited = Array(n).fill(false)
const start = Number(input[2])

let index = 0
const queue = [start - 1]
visited[start - 1] = true
let cnt = 1

while (queue.length > index) {
  const curr = queue[index++]

  for (let nx of [curr + distance[curr], curr - distance[curr]]) {
    if (nx < 0 || nx > n - 1) continue

    if (!visited[nx]) {
      visited[nx] = true
      queue.push(nx)
      cnt += 1
    }
  }
}

console.log(cnt)
