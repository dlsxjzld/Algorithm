const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, m] = input[0].split(" ").map(Number)

const graph = input.slice(1, 1 + n).map((row) => row.split("").map(Number))
const visited = Array.from({length:n},()=>Array.from({length:m},()=>false))

const dx = [0, 0, 1, -1]
const dy = [1, -1, 0, 0]

const bfs = () => {
  const queue = [[0,0]]
  visited[0][0] = true

  while(queue.length >0){
    const [x,y] = queue.shift()

    for(let i=0;i<4;i++){
      const [nx,ny] = [x+dx[i], y+dy[i]]
      if(0<=nx && nx<n && 0<=ny && ny<m && !visited[nx][ny] && graph[nx][ny] === 1 ){
        graph[nx][ny] = graph[x][y] +1
        visited[nx][ny] = true
        queue.push([nx,ny])
      }
    }
  }
}

bfs()

console.log(graph[n-1][m-1])