function solution(k, tangerine) {
    var answer = 0;

    const counts = {}
    tangerine.forEach((val)=>{
        counts[val] = (counts[val] || 0) + 1
    })
    
    const sortedCounts = Object.values(counts).sort((a,b)=>b-a)

    for(let value of sortedCounts){
        if(k <= 0){
            break
        }
        k-=value
        answer +=1
    }
    return answer;
}