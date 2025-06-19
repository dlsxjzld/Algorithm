function solution(arr)
{
    var answer = [];
    for(let i=0;i<=arr.length-1;i+=1){
        const cur = arr[i]
        if(!answer.length){
            answer.push(cur)
            continue
        }
        const last = answer[answer.length-1]
        if(last !== cur){
            answer.push(cur)
        }
    }
    
    return answer;
}