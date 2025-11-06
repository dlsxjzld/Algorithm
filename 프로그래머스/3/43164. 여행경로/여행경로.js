function solution(tickets) {
    var answer = null
    const graph = {}
    const visited = {}
    
    const getKey = (s,e)=>{
        return `${s}-${e}`
    }
    
    for(let [s,e] of tickets){
        if(!graph[s]){
            graph[s] = []
            visited[s] = []
        }
        graph[s].push(e)
        graph[s].sort()
        
        visited[s].push(false)
    }
    const checkAllVisited = ()=>{
        return Object.values(visited).flat().every((val)=>val === true)
    }
    
    
    const dfs = (start,path)=>{
        if(checkAllVisited()){
            if(!answer){
                answer = [...path]
            }
            return
        }

        
        if(!graph[start]){
            return
        }
        
        for(let i=0; i<graph[start].length;i+=1){
            const next = graph[start][i]
            if(!visited[start][i]){
                visited[start][i] = true
                path.push(next)
                dfs(next,path)
                path.pop()
                visited[start][i] = false
                
            }
        }
    }
    
    dfs('ICN',['ICN'])
    
    return answer;
}