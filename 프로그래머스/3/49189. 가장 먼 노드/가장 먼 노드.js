function bfs (graph,distance){
    let start = 1
    const queue = [start]
    let index =0
    distance[start] = 1
    while(queue.length>index){
        const cur = queue[index++]
        for(let next of graph[cur]){
            if(distance[next] === 0 || distance[next]> distance[cur]+1){
                distance[next] = distance[cur]+1
                queue.push(next)
            }
        }
    }
    
}
function solution(n, edge) {
    var answer = 0;
    const graph = Array.from({length:n+1},()=>[])
    edge.forEach(([a,b])=>{
        graph[a].push(b)
        graph[b].push(a)
    })
    
    const distance = Array.from({length:n+1},()=>0)
    bfs (graph,distance)

    const maxDist = Math.max(...distance)
    answer = distance.filter((val)=>val === maxDist).length
    return answer;
}