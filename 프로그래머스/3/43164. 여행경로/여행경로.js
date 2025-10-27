function solution(tickets) {
    var answer = [];
    
    // 가능한 경로가 2개 이상일 경우 알파벳 순서가 앞서는 경로
    // graph 만들 때 알파벳 순서가 앞서는 것으로 만들기
    // 방문한 곳은 다시 가도 된다 -> 중복되는 경로 생기지 않게 하려면 graph에서 갈 수 있는 곳을 하나씩 빼보자
    
    const graph = new Map()
    const visited = new Map()
    
    for(let [a,b] of tickets){
        const start = graph.get(a) 
        if(!start){
            graph.set(a,[b])
            visited.set(a,[false])
        }else{
            const newEnd = [...start,b].sort()
            graph.set(a,newEnd)
            visited.set(a,[...visited.get(a),false])
        }
    }
    
    const checkAllTickets = ()=>{
        return Array.from(visited).map(([key,visits])=>visits).flat().every((val)=>val ===true)
    }
    
    
    function dfs(start,arr){
        if(checkAllTickets()){
            answer.push([...arr])
            return
        }
        
        const nextNodes = graph.get(start) ?? []
        if(!nextNodes.length){
            return
        }
        const nextVisited = visited.get(start)
        for(let i=0;i<nextNodes.length;i+=1){
            const next = nextNodes[i]
            if(!nextVisited[i]){
                nextVisited[i] = true
                dfs(next,[...arr,next])
                nextVisited[i] = false
            }
        }
        
    }
    
    dfs('ICN',['ICN'])
    
    answer.sort()
    return (answer[0])
    

       
    
    
}