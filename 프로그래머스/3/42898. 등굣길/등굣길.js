function solution(m, n, puddles) {
    var answer = 0;
    
    const graph = Array.from({length:n+1},()=>Array.from({length:m+1},()=>false))
    for(let [c,r] of puddles){
        graph[r][c] = true
    }
    
    // 올 수 있는 방법은 2가지
    // 오른쪽, 아래
    
    // 더하기 
    // 누적합?
    // dp[i][j] = dp[i][j-1] + dp[i-1][j]
    // graph[i][j] 가 puddles면 하지 않음
    const dp = Array.from({length:n+1},()=>Array.from({length:m+1},()=>0))
    
    for(let i=1;i<=n;i+=1){
        for(let j=1;j<=m;j+=1){
            if(i===1 && j === 1){
                dp[1][1] = 1
                continue
            }
            if(graph[i][j]){
                continue
            }
            dp[i][j] = (dp[i-1][j] + dp[i][j-1])%1_000_000_007
        }
    }
    // console.log(dp.map((row)=>row.join(' ')).join('\n'))
    answer = dp[n][m]
    
    
    return answer;
}