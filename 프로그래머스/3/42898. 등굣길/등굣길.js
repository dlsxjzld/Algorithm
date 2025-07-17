function solution(m, n, puddles) {
    var answer = 0;
    const dp = Array.from({length:n},()=>Array.from({length:m},()=>0))
    
    puddles.forEach(([c,r])=>{
        dp[r-1][c-1] = -1
    })
    
    const MAX = 1_000_000_007
    
    
    dp[n-1][m-1] = 1
    
    for(let i=n-1;i>=1;i-=1){
        if(dp[i-1][m-1] !== -1){
            dp[i-1][m-1] = dp[i][m-1]
        }else{
            dp[i-1][m-1] = 0
        }
    }
    
    for(let j=m-1;j>=1;j-=1){
        if(dp[n-1][j-1] !== -1){
            dp[n-1][j-1] = dp[n-1][j] 
        }else{
            dp[n-1][j-1] = 0
        }
    }
    

    
    for(let i=n-2;i>=0;i-=1){
        for(let j=m-2;j>=0;j-=1){
            if(dp[i][j] === -1){
                dp[i][j] = 0
            }else{
                dp[i][j] = (dp[i+1][j]%MAX) + (dp[i][j+1]%MAX)
            }
        }
    }

    answer = dp[0][0] % MAX
    return answer;
}