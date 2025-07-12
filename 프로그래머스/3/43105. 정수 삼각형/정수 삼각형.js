function solution(triangle) {
    var answer = 0;
    const dp = Array.from({length:triangle.length},(_,idx)=>Array.from({length:idx+1},()=>0))

    dp[0][0] = triangle[0][0]
    for(let i=1;i<triangle.length;i+=1){
        
        for(let j=0;j<triangle[i].length;j+=1){
            const cur = triangle[i][j]
            dp[i][j] = Math.max(dp[i-1][j-1] ?? 0,dp[i-1][j] ?? 0) + cur
            answer = Math.max(answer,dp[i][j])
        }
    }


    return answer;
}