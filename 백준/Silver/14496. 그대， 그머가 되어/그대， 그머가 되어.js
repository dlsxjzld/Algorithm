const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")


  const [a,b] = input[0].split(' ').map(Number)

  const [n,m]= input[1].split(' ').map(Number)
  const graph = Array.from({length:n+1},()=>[])
  const visited = Array.from({length:n+1},()=>false)

  let answer =Number.MAX_SAFE_INTEGER

  for(let i=2;i<m+2;i++){
    const [x,y] = input[i].split(' ').map(Number)
    graph[x].push(y)
    graph[y].push(x)
  }

  const bfs = (start,end)=>{
    const queue=[[start,0]]
    visited[start] = true
    let index = 0

    while(queue.length>index){
      const [curr,dist] = queue[index++]

      if(curr === end){
        answer = Math.min(answer,dist)
      }

      for(let next of graph[curr]){
        if(!visited[next]){
          visited[next] = true
          queue.push([next,dist+1])
        }
      }
    }

  }

  bfs(a,b)

  console.log(answer === Number.MAX_SAFE_INTEGER ? -1 : answer)
