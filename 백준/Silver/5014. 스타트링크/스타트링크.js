const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

// 417

const [f, s, g, u, d] = input[0].split(" ").map(Number)

const floors = Array.from({ length: f + 1 }, () => 0)
const visited = Array.from({ length: f + 1 }, () => false)
let answer = -1
const bfs = (start) => {
  if (start === g) {
    return 0
  }

  const queue = [start]
  visited[start] = true

  while (queue.length > 0) {
    const currentFloor = queue.shift()
    for (let i of [u, -d]) {
      const nextFloor = currentFloor + i
      if (1 <= nextFloor && nextFloor <= f && !visited[nextFloor]) {
        visited[nextFloor] = true
        floors[nextFloor] = floors[currentFloor] + 1
        queue.push(nextFloor)
      }
    }
  }

  return floors[g] === 0 ? -1 : floors[g]
}

answer = bfs(s)
if (answer === -1) {
  console.log("use the stairs")
} else {
  console.log(answer)
}
