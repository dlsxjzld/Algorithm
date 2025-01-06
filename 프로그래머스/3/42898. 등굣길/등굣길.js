
function solution(m, n, puddles) {
    var answer = 0;
    const dp = Array.from({length:m+1},()=>Array.from({length:n+1},()=>0))
    puddles.forEach(([x,y])=>{
        dp[x][y] = -1
    })
    
    dp[1][1] = 1
    
    for(let i=1;i<=m;i+=1){
        for(let j=1;j<=n;j+=1){
            if((i === 1 && j === 1 ) || dp[i][j] === -1){
                continue
            }
            if(dp[i-1][j] === -1){
                dp[i][j] = dp[i][j-1] % 1_000_000_007
            }else if(dp[i][j-1] === -1){
                dp[i][j] = dp[i-1][j] % 1_000_000_007
            }else{
                dp[i][j] = (dp[i-1][j] + dp[i][j-1])% 1_000_000_007
            }
        }
    }
    // console.log(dp)
    answer = dp[m][n]
    return answer;
}