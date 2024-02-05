const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, m] = input[0].split(" ").map(Number)
const graph = input.slice(1, 1 + n).map((row) => row.split(" "))

const distance = Array.from({ length: n }, () =>
  Array.from({ length: m }, () => 0),
)
const visited = Array.from({ length: n }, () =>
  Array.from({ length: m }, () => false),
)
const start = []

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (graph[i][j] === "2") {
      start.push([i, j])
      visited[i][j] = true
    }
  }
}

function bfs(start) {
  const queue = [...start]

  const dx = [0, 0, 1, -1]
  const dy = [1, -1, 0, 0]
  while (queue.length > 0) {
    const [x, y] = queue.shift()

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i]
      const ny = y + dy[i]

      if (
        0 <= nx &&
        nx < n &&
        0 <= ny &&
        ny < m &&
        graph[nx][ny] === '1' &&
        !visited[nx][ny]
      ) {
        visited[nx][ny] = true
        distance[nx][ny] = distance[x][y] + 1
        queue.push([nx, ny])
      }
    }
  }

  for(let i=0;i<n;i++){
    for(let j=0;j<m;j++){
      if(distance[i][j] === 0 && graph[i][j] === '1'){
        distance[i][j] = -1
      }
    }
  }
}
bfs(start)

const answer = distance.map(row=>row.join(' '))
answer.forEach(row => console.log(row))

