function solution(n) {
    var answer = 0;
    const dp = Array.from({length:n+1},()=>0)
    if(n%2 === 1){
        return answer
    }
    dp[0] = 1
    for(let i=0;i<=n;i+=2){
        if(i===2){
            dp[2] = 3
        }else if(i>=4){
            let tmp = 0
            for(let j=i-4;j>=0;j-=2){
                tmp += dp[j]
            }
            dp[i] = (dp[i-2] * dp[2] + 2*tmp)%1_000_000_007
        }
    }
    
    answer = dp[n]
    return answer;
}