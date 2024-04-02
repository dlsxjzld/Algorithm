const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input.shift())
const graph = input.map((row) => row.split("").map(Number))

const visited = Array.from({ length: n }, () =>
  Array.from({ length: n }, () => false),
)

const bfs =  (sx,sy,cnt)=>{
  const queue = [[sx,sy]]
  const move = [[0,1],[1,0],[0,-1],[-1,0]]
  
  while(queue.length>0){
    const [x,y] = queue.shift()

    for(let i=0;i<4;i++){
      const [nx,ny] = [x+move[i][0] , y+move[i][1]]
      if(nx>=0 && ny>=0 && nx<n && ny<n && !visited[nx][ny] && graph[nx][ny] === 1){
        visited[nx][ny] = true
        queue.push([nx,ny])
        cnt +=1
      }
    }
  }

  return cnt
}

const answer = []

for(let i=0; i<n;i++){
  for(let j=0; j<n;j++){
    if(graph[i][j] === 1 && !visited[i][j]){
      visited[i][j] = true
      answer.push(bfs(i,j,1))
    }
  }
}

console.log(answer.length)
console.log(answer.sort((a,b)=>a-b).join('\n'))