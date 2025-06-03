function conversion (target,n){
    return target.toString(n).toUpperCase()
}

function solution(n, t, m, p) {
    var answer = '';
    
    
    let step = 1
    let num = 0
    while(answer.length !== t){
        const converted = conversion(num,n)
        for(let i=0;i<converted.length;i+=1){
            if((m === p && (step%m ) === 0) ||  (m !==p && (step % m) === p)){
                answer += converted[i]
                if(answer.length === t){
                    break
                }
            }
            step += 1
        }
        num+=1
    }
    
    return answer;
}