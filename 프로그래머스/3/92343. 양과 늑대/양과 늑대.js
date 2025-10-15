function solution(info, edges) {
    var answer = 0;
    const isSheep = 0
    
    // 양과 늑대의 수
    
    const graph = Array.from({length:info.length},()=>[])
    for(let [s,e] of edges){
        graph[s].push(e)
    }
    
    function dfs(sheep,wolf,nextNodes,currentNode){
        if(info[currentNode] === isSheep){
            sheep+=1
        }else{
            wolf +=1
        }
        answer = Math.max(answer,sheep)
        if(sheep<=wolf){
            return
        }

        const possibleNodes = [...nextNodes].filter((node)=>node !== currentNode)
        possibleNodes.push(...graph[currentNode])
        // 현재 노드에서 갈 수 있는 곳들 + 누적된 갈 수 있는 곳 - 현재 노드
        for(let next of possibleNodes){
            dfs(sheep,wolf,possibleNodes,next)
        }
        
    }
    dfs(0,0,[0],0)
    
    
    return answer;
}