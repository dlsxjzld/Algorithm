function solution(n, computers) {
    var answer = 0;
    const graph = Array.from({length:n},()=>[])
    
    for(let i=0;i<n;i+=1){
        for(let j=0;j<n;j+=1){
            if(i === j){
                continue
            }
            const connected = computers[i][j]
            if(connected){
                graph[i].push(j)   
            }
        }
    }
    
    function dfs(node,visited){
        for(let next of graph[node]){
            if(!visited[next]){
                visited[next] = true
                dfs(next,visited)
            }
        }
    }
    
    const visited = Array.from({length:n},()=>false)
    for(let i=0;i<n;i+=1){
        if(!visited[i]){
            visited[i] = true
            dfs(i,visited)
            answer += 1
        }
    }
    
    
    return answer;
}