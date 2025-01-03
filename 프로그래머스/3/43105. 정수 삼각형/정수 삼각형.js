function solution(triangle) {
    var answer = 0;
    const n = triangle.length

    const dp = Array.from({length:n},(_,idx)=>Array.from({length:triangle[n-1].length+1},()=>0))
    dp[0][1] = triangle[0][0]

    for(let i=1;i<n;i+=1){
        for(let j=1;j<=i+1;j+=1){
            dp[i][j] = triangle[i][j-1] + Math.max(dp[i-1][j],dp[i-1][j-1])
            answer = Math.max(answer,dp[i][j])
        }
    }


    return answer;
}