function solution(N, number) {
    var answer = 0;
    // dp[1] 숫자 하나로 표현 가능한 수
    // dp[1] = 1 +n, n, -n, /n, *n
    // dp[2] = 5
    // n+n, n-n, n/n, n*n, nn 
    // n+n +n, n+n-n, n+n / n, n+n *n, 
    // dp[3] = dp[2] * dp[1]
    // dp[4] = dp[3] * dp[1] + dp[2] * dp[2]
    // dp[5] = dp[4] * dp[1] + dp[3] * dp[2] + dp[2] * dp[3] + dp[1] * dp[4]
    // dp[i] = dp[i-1] * dp[1] + dp[i-2] * dp[2] + ... + dp[1] * dp[i-1]
    
    // 5+5
    // 5-5 
    // 5/5
    // 5*5
    // 55
    
    // 55+5
    // 55/5
    // 55*5
    // 55-5
    
    
    const dp = Array.from({length:9},()=>new Set())
    // dp[i] = dp[i-1] * dp[1] + dp[i-2] * dp[2] + ... + dp[1] * dp[i-1]
    for(let i=1;i<=8;i+=1){
        dp[i].add(Number(N.toString().repeat(i)))
        for(let j=i-1;j>=1;j-=1){
            let k = i-j
            
            for(let x of dp[j]){
                for(let y of dp[k]){
                    dp[i].add(x+y)
                    dp[i].add(x-y)
                    dp[i].add(x*y)
                    if(y !== 0){
                        dp[i].add(Math.floor(x/y))
                    }
                }
            }
        }
    }
    
    for(let i=1;i<=8;i+=1){
        if(dp[i].has(number)){
            return i
        }
    }
    return -1
}