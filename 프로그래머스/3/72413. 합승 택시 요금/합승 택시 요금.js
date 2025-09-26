function solution(n, s, a, b, fares) {
    var answer = Infinity
    
    // S는 달라질 수 있다. -> 모든 지점에서 다른 모든 지점까지의 거리를 알아야 한다.
    // 어디까지 합승하고, 어디부터 각자 가야할까.
    // 4에서 시작 -> 5까지 합승
    // 5부터 따로 
    
    const graph = Array.from({length:n+1},()=>Array.from({length:n+1},()=>Infinity))
    
    for(let [c,d,f] of fares){
        graph[c][d] = f
        graph[d][c] = f
    }
    
    for(let i=1;i<=n;i+=1){
        graph[i][i] = 0
    }
    
    for(let k=1;k<=n;k+=1){
        for(let i=1;i<=n;i+=1){
            
            for(let j=1;j<=n;j+=1){
                if(i===j || i===k || j===k){
                    continue
                }
                graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j])
                
            }
        }
    }
    
    
    for(let i=1;i<=n;i+=1){    
        answer = Math.min(answer,graph[s][i] + graph[i][a] + graph[i][b])
    }
    
    
    return answer;
}