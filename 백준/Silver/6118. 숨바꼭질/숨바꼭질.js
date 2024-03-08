const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

class Queue {
  constructor() {
    this.queue = []
    this.front = 0
    this.rear = 0
  }
  enqueue(value) {
    this.queue[this.rear++] = value
  }
  dequeue() {
    const value = this.queue[this.front]
    delete this.queue[this.front]
    this.front += 1
    return value
  }
  size() {
    return this.rear - this.front
  }
}

  const [n,m] = input[0].split(' ').map(Number)
  const graph = Array.from({length:n+1},()=>[])
  const visited = Array.from({length:n+1},()=>0)
  
  
  const connection = input.slice(1,1+m).map(row=>row.split(' ').map(Number))
  connection.forEach(([a,b],idx)=>{
    graph[a].push(b)
    graph[b].push(a)
    graph[a].sort((a,b)=>a-b)
    graph[b].sort((a,b)=>a-b)
  })
  

  const bfs = (start)=>{
    const queue = new Queue() 
    queue.enqueue([start,0])
    visited[start] = 0
    
    while(queue.size()>0){
      const [cur,distance] = queue.dequeue()

      for(let nextNode of graph[cur]){
        if(!visited[nextNode] && nextNode !== start){
          visited[nextNode] = distance+1
          queue.enqueue([nextNode,distance+1])
        }
      }
    }

  }

  bfs(1)
  const max_distance = Math.max(...visited)
  const min_num = visited.findIndex((value)=>value === max_distance)
  const numberOfSame = visited.filter((value)=>value === max_distance).length
  console.log(min_num,max_distance,numberOfSame)
