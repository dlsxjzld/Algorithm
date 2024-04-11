const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])
const m = Number(input[1])
const graph = Array.from({ length: n + 1 }, () => [])
const visited = Array.from({ length: n + 1 }, () => false)
const target = input.slice(2, 2 + m).map((row) => row.split(" ").map(Number))
target.forEach(([a, b]) => {
  graph[a].push(b)
  graph[b].push(a)
})
let cnt = 0

function bfs(start){
  const queue = [[start,0]]
  visited[start] = true
  let index = 0
  
  while(queue.length>index){
    const [cur,depth] = queue[index++]

    for(let next of graph[cur]){
      if(!visited[next]){
        if(depth+1 <= 2 ){
          cnt +=1
        }
        queue.push([next,depth+1])
        visited[next] = true

      }
    }
  }
}

bfs(1)

console.log(cnt)