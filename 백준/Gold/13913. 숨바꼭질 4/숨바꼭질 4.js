const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, k] = input[0].split(" ").map(Number)
const MAX = 100_000
const visited = Array.from({ length: MAX + 1 }, () => -1)

const path = Array.from({ length: MAX + 1 }, () => -1)

const bfs = (start, end, visited, path) => {
  const queue = [start]
  let index = 0

  visited[start] = 0

  while (queue.length > index) {
    const cur = queue[index++]
    if (cur == end) continue

    for (let nx of [cur - 1, cur + 1, cur * 2]) {
      if (nx < 0 || nx > MAX || visited[nx] !== -1) continue
      queue.push(nx)
      visited[nx] = visited[cur] + 1
      path[nx] = cur
    }
  }
}

bfs(n, k, visited,path)
let answer = `${k}`
let start = k
for(let i=visited[k];i>0;i--){
  const next = path[start]
  answer = `${next} ` + answer
  start = next
}

console.log(visited[k])
console.log(answer)
