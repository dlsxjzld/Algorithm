function bfs(start,graph,visited){
    const queue = [start]
    let index = 0
    while(queue.length>index){
        const cur = queue[index++]
        
        for(let i=0;i<graph.length;i+=1 ){
            const next =  graph[cur][i]
            if(!visited[i] && next === 1){
                visited[i] = true
                queue.push(i)
            }
        }
    }
}

function solution(n, computers) {
    var answer = 0;
    const graph = Array.from({length:n},()=>[])
    const visited = Array.from({length:n},()=>false)
    
    for(let i=0;i<n;i+=1){
        const cur = computers[i]
        for(let j=0;j<n;j+=1){
            const next = cur[j]

            if(!visited[j] && next === 1){
                visited[j] = true
                bfs(j,computers,visited)
                answer +=1
            }
        }

    }
    
    return answer;
}