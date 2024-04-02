const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, m] = input.shift().split(" ").map(Number)
const graph = input.map((row) => row.split(" ").map(Number))
const visited = Array.from({ length: n }, () =>
  Array.from({ length: m }, () => false),
)

let sx = -1
let sy = -1

const findStart = () => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] === 2) {
        sx = i
        sy = j
        return
      }
    }
  }
}

findStart()
visited[sx][sy] = true
graph[sx][sy] = 0


const bfs = () => {
  const queue = [[sx,sy]]
  const move = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]

  while(queue.length>0){
    const [x,y] = queue.shift()
    
    for(let i=0;i<4;i++){
      const [nx,ny] = [x+move[i][0] , y+move[i][1]]
      if(nx>=0 && ny>=0 && nx<n && ny<m && !visited[nx][ny] && graph[nx][ny] !==0) {
        graph[nx][ny] = graph[x][y] + 1
        queue.push([nx,ny])
        visited[nx][ny] = true
      }
    }
  }
}
bfs()

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (graph[i][j] === 1 && !visited[i][j]) {
      graph[i][j] = -1
    }
  }
}

console.log(graph.map(row=>row.join(' ')).join('\n'))