class Queue {
    constructor(){
        this.queue = []
        this.front = 0
        this.rear = 0
    }
    enqueue(value){
        this.queue[this.rear++] = value
    }
    dequeue(){
        const returnValue = this.queue[this.front]
        delete this.queue[this.front]
        this.front += 1

        return returnValue   
    }
    size(){
        return this.rear - this.front
    }
}

function solution(n, wires) {
    var answer = 9999;
    const graph = Array.from({length:n+1},()=>[])
    wires.forEach(([v1,v2])=> {graph[v1].push(v2); graph[v2].push(v1)})
    
    
    for(let i=0;i<n-1;i++){
        const visited = Array.from({length:n+1},()=>false)
        const [v1,v2] = wires[i]
        
        graph[v1].splice(graph[v1].indexOf(v2),1)
        graph[v2].splice(graph[v2].indexOf(v1),1)
        let x = bfs(v1,visited)
        let y = bfs(v2,visited)
        graph[v1].push(v2)
        graph[v2].push(v1)

        answer = Math.min(answer,Math.abs(x-y))
    }
    
    function bfs(start,visited){
        const queue = new Queue()
        queue.enqueue(start)
        visited[start] = true
        let cnt = 1

        while(queue.size()){
            const node = queue.dequeue()
            graph[node].forEach((nextNode,_)=>{
                if(!visited[nextNode]){
                    queue.enqueue(nextNode)
                    visited[nextNode] = true
                    cnt +=1
                }
            })
        }
        return cnt
    }
    
    
    return answer;
}