function bfs(node,graph,visited){
    const queue = [node]
    let index = 0
    while(queue.length>index){
        const cur = queue[index++]
        
        for(let next of graph[cur]){
            if(!visited[next]){
                visited[next] = true
                queue.push(next)
            }
        }
    }
    return 1
}

function solution(n, computers) {
    var answer = 0;
    const visited = Array.from({length:n},()=>false)
    const graph = Array.from({length:n},()=>[])
    for(let i=0;i<n;i+=1){
        for(let j=0;j<n;j+=1){
            if(i === j) {
                continue
            }
            if(computers[i][j] === 1){
                graph[i].push(j)
            }
        }
    }
    
    for(let i=0;i<n;i+=1){
        if(!visited[i]){
            visited[i] = true
            answer += bfs(i,graph,visited)
        }
    }

    return answer;
}