
function solution(n) {
    var answer = 0;
    
    for(let i=2;i<=n;i+=1){
        const center = Math.floor(Math.sqrt(i))
        let flag = true
        for(let j=2;j<=center;j+=1){
            if(i%j === 0){
                flag = false
                break
            }
        }
        if(flag){
            answer +=1
        }
    }
    return answer;
}