function solution(n, results) {
    var answer = 0;
    const graph = Array.from({length:n},()=>Array(n).fill(0))
    results.forEach(([A,B],idx)=>{
        graph[A-1][B-1] = 1; // 승
        graph[B-1][A-1] = -1; // 퍄
    })
    graph.forEach((v,idx)=>graph[idx][idx] = 999)

    for(let k=0;k<n;k++){
        for(let i=0;i<n;i++){
            for(let j=0;j<n;j++){
                if(graph[i][k] === 1 && graph[k][j] === 1){
                    graph[i][j] = 1
                }
                if(graph[i][k] === -1 && graph[k][j] === -1){
                    graph[i][j] = -1
                }
            }
        }
    }

    answer = graph.filter(v=>!v.includes(0)).length
    
    return answer;
}