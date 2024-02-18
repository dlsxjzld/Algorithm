const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])
const [r1, c1, r2, c2] = input[1].split(" ").map(Number)
const graph = Array.from({ length: n }, () =>
  Array.from({ length: n }, () => Number.MAX_SAFE_INTEGER),
)


const move = [
  [-2,-1],
  [-2,+1],
  [0,-2],
  [0,+2],
  [+2,-1],
  [+2,+1],
]

const bfs = (sx,sy) =>{
  const queue = [[sx,sy]]
  graph[sx][sy] = 0
  
  while(queue.length>0){
    const [x,y] = queue.shift()

    for(let [dx,dy] of move){
      const [nx,ny] = [x+dx,y+dy]
      if(nx<0 || ny<0 || nx>=n || ny>= n ){
        continue
      }
      if(graph[nx][ny] > graph[x][y] +1){
        graph[nx][ny] = graph[x][y]+1
        queue.push([nx,ny])
      }
    }
  }
}

bfs(r1,c1)

if(graph[r2][c2] === Number.MAX_SAFE_INTEGER){
  console.log(-1)
}else{
  console.log(graph[r2][c2])
}