
function solution(n) {
    var answer = 0;
    const arr = Array.from({length:n+1},()=>true)
    arr[0] = false
    arr[1] = false
    
    for(let i=2;i<=n;i+=1){
        for(let j=i;j<=n;j+=i){
            if(i === j){
                continue
            }else{
                arr[j] = false
            }
        }
    }
    
    answer = arr.filter((val)=>val).length
    
    return answer;
}