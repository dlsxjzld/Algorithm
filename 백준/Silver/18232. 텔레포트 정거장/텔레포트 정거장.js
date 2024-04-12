const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, m] = input[0].split(" ").map(Number)

const [s, e] = input[1].split(" ").map(Number)
const graph = Array.from({ length: n + 1 }, () => [])
const visited = Array.from({ length: n + 1 }, () => false)
if (m > 0) {
  for (let i = 2; i < 2 + m; i++) {
    const [x, y] = input[i].split(" ").map(Number)
    graph[x].push(y)
    graph[y].push(x)
  }
}

const queue = [[s, 0]]
visited[s] = true
let index = 0
while (queue.length > index) {
  const [curr, dist] = queue[index++]
  
  if (curr === e) {
    console.log(dist)
    break
  }

  for (let next of graph[curr]) {
    if (visited[next] === false) {
      queue.push([next, dist + 1])
      visited[next] = true
    }
  }
  if(curr+1 <=n && !visited[curr+1]){
    queue.push([curr+1,dist+1])
    visited[curr+1] = true
  }
  if(curr-1 >=1 && !visited[curr-1]){
    queue.push([curr-1,dist+1])
    visited[curr-1] = true
  }
}
