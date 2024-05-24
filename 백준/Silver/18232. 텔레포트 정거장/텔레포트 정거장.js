const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [N, M] = input[0].split(" ").map(Number)
const [S, E] = input[1].split(" ").map(Number)
const graph = Array.from({ length: N + 1 }, () => [])
const visited = Array.from({ length: N + 1 }, () => 0)
input.slice(2).forEach((row) => {
  const [x, y] = row.split(" ").map(Number)
  graph[x].push(y)
  graph[y].push(x)
})

const move = (start) => {
  const queue = [[start, 0]]
  let index = 0
  while (queue.length > index) {
    const [current, time] = queue[index++]

    for (let nx of [current + 1, current - 1 , ...graph[current]]) {
      if (nx < 1 || nx > N || visited[nx]) continue
      
      visited[nx] = time+1
      queue.push([nx, time + 1])
    }
  }
}
move(S)

console.log(visited[E])
