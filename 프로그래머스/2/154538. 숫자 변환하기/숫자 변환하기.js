function solution(x, y, n) {
    var answer = 0;
    const MAX = 1_000_000
    const dp = Array.from({length:MAX+1},()=>-1)
    dp[x] = 0
    
    
    const queue = [x]
    let index =0
    
    while(queue.length>index){
        const cur = queue[index++]
        
        for(let nx of [cur*3,cur*2,cur+n]){
        
            if(dp[nx] === -1){
                dp[nx] = dp[cur] + 1
                queue.push(nx)
            }
            else if(dp[nx] !== -1 && dp[nx] > dp[cur]+1){
                dp[nx] = dp[cur]+1
                queue.push(nx)
            }
        }
    }
    answer = dp[y]
    
    return answer;
}