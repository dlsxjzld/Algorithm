function solution(n, s) {
    var answer = [];
  
    const value = Math.floor(s/n)
    let rest = s - n*value
    if(value === 0){
        return [-1]
    }
    
    answer = Array.from({length:n},()=>value)
    
    while(rest >0){
        for(let i=0;i<n;i+=1){
            if(rest !== 0){
                rest -=1
                answer[i] +=1
            }    
        }
    }
    
    return answer.sort((a,b)=>a-b);
}