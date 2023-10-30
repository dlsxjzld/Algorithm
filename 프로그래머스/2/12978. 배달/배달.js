function solution(N, road, K) {
    var answer = 0;

    // 1번 마을에서 다른 모든 마을로 가야함 -> 다익스트라
    // 다익스트라 -> 힙 자료구조 써야함 -> k시간 이하 -> minHeap
    const graph = Array.from({length:N+1},()=>[])
    road.forEach(([a,b,c])=>{
        graph[a].push({to:b,cost:c})
        graph[b].push({to:a,cost:c})
    })
    const distance = Array.from({length:N+1},()=>Number.MAX_SAFE_INTEGER)
    
    const queue = []
    queue.push({to:1,cost:0})
    distance[1] = 0
    
    while(queue.length){
        const { to } = queue.pop()
        graph[to].forEach((nextNode)=>{
            if(distance[nextNode.to] > distance[to] + nextNode.cost){
                distance[nextNode.to] = distance[to] + nextNode.cost
                queue.push(nextNode)
            }
        })
    }

    answer = distance.filter((v,i)=>v<=K).length
    return answer;
}