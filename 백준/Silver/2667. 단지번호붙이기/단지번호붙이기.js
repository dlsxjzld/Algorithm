const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0])

const graph = input.slice(1,1+n).map(row=>row.split('').map(Number))
const visited = Array.from({length:n},()=>Array.from({length:n},()=>false))

const dx = [0,0,1,-1] // 동 서 남 북
const dy = [1,-1,0,0]

function bfs(x,y,cnt){
  const queue = []
  queue.push([x,y])

  while(queue.length>0){
    const [x,y] = queue.shift()

    for(let i=0;i<4;i++){
      const nx = x+dx[i]
      const ny = y+dy[i]

      if(nx<0 || ny<0 || nx>=n || ny>=n || visited[nx][ny] === true || graph[nx][ny] === 0) continue
      queue.push([nx,ny])
      visited[nx][ny] = true
      cnt +=1
    }
  }
  return cnt

}

const answer = []
for(let i=0;i<n;i++){
  for(let j=0;j<n;j++){
    if(graph[i][j] === 1){
      if(visited[i][j] === false){
        visited[i][j] = true
        answer.push(bfs(i,j,1))
      }
    }
  }
}

answer.sort((a,b)=>a-b)
console.log(answer.length)
answer.forEach(val=>console.log(val))
