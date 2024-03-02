const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])
const graph = input.slice(1).map(row=>row.split(' ').map(Number))

const bfs = ()=>{
  const queue = [[0,0,graph[0][0]]]
  const visited = Array.from({length:n},()=>Array.from({length:n},()=>false))
  visited[0][0] = true

  const move=[[0,1],[1,0]]
  
  let flag = false
  
  while(queue.length>0){
    const [x,y,availableMove] = queue.shift()
    if(x === n-1 && y === n-1){
      flag = true
      break
    }
    for(let i=0;i<2;i+=1){

      const [nx,ny] = [x+move[i][0]*availableMove,y+move[i][1]*availableMove]
      if(nx<0 || ny<0 || nx>=n || ny>=n || visited[nx][ny]){
        continue
      }
      queue.push([nx,ny,graph[nx][ny]])
      visited[nx][ny] = true
    }
  }
  return flag
}

const answer = bfs()
console.log(answer ? 'HaruHaru' : 'Hing')