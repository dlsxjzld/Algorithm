const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

// 가로 세로 대각선
// 동 동남 남 남서 서 서북 북 북동
const dx = [0, 1, 1, 1, 0, -1, -1, -1]
const dy = [1, 1, 0, -1, -1, -1, 0, 1]

function bfs(startX, startY, graph, visited) {
  const queue = [[startX, startY]]

  while (queue.length > 0) {
    const [x, y] = queue.shift()
    for (let i = 0; i < 8; i++) {
      const nx = x + dx[i]
      const ny = y + dy[i]

      if (
        nx < 0 ||
        ny < 0 ||
        nx >= graph.length ||
        ny >= graph[0].length ||
        visited[nx][ny] === true ||
        graph[nx][ny] === 0
      ) {
        continue
      }
      visited[nx][ny] = true
      queue.push([nx, ny])
    }
  }
}

while (true) {
  const [w, h] = input.shift().split(" ").map(Number)
  
  if (w === 0 && h === 0) {
    return
  }
  let island = 0
  const graph = []

for(let idx=0;idx<h;idx++){
    graph.push(input.shift().split(' ').map(Number))
}
  
 
  
  const visited = Array.from({ length: h }, () =>
    Array.from({ length: w }, () => false),
  )

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (graph[i][j] === 1 && !visited[i][j]) {
        visited[i][j] = true
        bfs(i, j, graph, visited)
        island += 1
      }
    }
  }
  console.log(island)
}
