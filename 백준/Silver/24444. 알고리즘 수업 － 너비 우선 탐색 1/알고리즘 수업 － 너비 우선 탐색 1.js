const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, m, r] = input[0].split(" ").map(Number)
const edges = input.slice(1,1+m).map(row=>row.split(' ').map(Number))

const graph = Array.from({ length: n + 1 }, () => [])
const visited = Array.from({ length: n + 1 }, () => false)
const answer = Array.from({ length: n + 1 }, () => 0)
let cnt = 1
answer[r] = cnt

for(let [a,b] of edges){
  graph[a].push(b)
  graph[b].push(a)
}
for(let i=1;i<n+1;i++){
  graph[i].sort((a,b)=>a-b)
}

const bfs = (start) => {
  const queue = [start]
  visited[start] = true
  
  while(queue.length>0){
    const cur = queue.shift()

    for (let next of graph[cur]) {
      if(!visited[next]){
        cnt +=1
        visited[next] = true
        queue.push(next)
        answer[next] = cnt
      }
    }
  }
  
}

bfs(r)
console.log(answer.slice(1,1+n).join('\n'))