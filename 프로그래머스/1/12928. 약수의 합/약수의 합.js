function solution(n) {
    var answer = 0;
    const gcds = []
    const sqrt = Math.floor(Math.sqrt(n))
    for(let i=1;i<=sqrt;i+=1){
        if(n%i === 0){
            const tmp = n/i
            if(tmp != i){
                gcds.push(i,n/i)    
            }else{
                gcds.push(i)
            }
        }
    }
    answer = gcds.reduce((a,b)=>a+b,0)
    return answer;
}