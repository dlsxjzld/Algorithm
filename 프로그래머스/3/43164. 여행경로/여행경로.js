function solution(tickets) {
    var answer = [];
    const graph = {}
    for(let [a,b] of tickets){
        if(!graph[a]){
            graph[a] = []
        }
        graph[a].push(b)
        graph[a].sort()
    }
    const route = []
    
    const stack = ["ICN"]
    
    while(stack.length >0){
        const current = stack[stack.length-1]
        
        if(graph[current] && graph[current].length>0){
            const next = graph[current].shift()
            stack.push(next)
        }else{
            route.push(stack.pop())
        }
    }
    
    answer = route.reverse()
    return answer;
}