class Queue {
    constructor(){
        this.queue = []
        this.front = 0
        this.rear = 0
    }
    enqueue(value){
        this.queue.push(value)
        this.rear+=1
    }
    dequeue(){
        const returnValue = this.queue[this.front]
        delete this.queue[this.front]
        this.front+=1
        return returnValue
    }
    size(){
        return this.rear - this.front
    }
}

function solution(n, edge) {
    var answer = 0;
    const queue = new Queue()
    // graph 선언
    const graph = Array.from({length:n+1},()=>[])
    // graph 구현
    edge.forEach(([a,b])=>{graph[a].push(b); graph[b].push(a)})
    const distance = Array(n+1).fill(0)
    const visited = Array(n+1).fill(false)
    
    // bfs
    queue.enqueue(1)
    visited[1] = true
    while(queue.size()){
        const node = queue.dequeue()
        for(const nextNode of graph[node]){
            if(visited[nextNode] === false){
                visited[nextNode] = true
                distance[nextNode] = distance[node]+1
                queue.enqueue(nextNode)
            }
        }
    }
    const MAX_DISTANCE = Math.max(...distance)

    answer = distance.filter((dist)=>dist===MAX_DISTANCE).length
    return answer;
}