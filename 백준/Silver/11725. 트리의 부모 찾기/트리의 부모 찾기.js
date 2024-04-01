const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")


  const n = Number(input[0])
  const graph = Array.from({length:n+1},()=>[])
  const visited=Array.from({length:n+1},()=>false)
  const answer = Array.from({length:n+1},()=> -1)

  

  input.slice(1).forEach((row)=>{
    const [x,y] = row.split(' ').map(Number)
    graph[x].push(y)
    graph[y].push(x)
  })

  const dfs = (start)=>{
    visited[start] = true

    for(let next of graph[start]){
      if(!visited[next]){
        visited[next] = true
        answer[next] = start
        dfs(next)
      }
    }
  }

  dfs(1)

  console.log(answer.slice(2).join('\n'))


