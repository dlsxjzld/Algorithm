function solution(k, tangerine) {
    var answer = 0;

    const counts = {}
    tangerine.forEach((val)=>{
        if(!counts[val]){
            counts[val] = 0
        }
        counts[val] +=1
    })
    const sortedCounts = Object.entries(counts).sort((a,b)=>b[1]-a[1])

    for(let [key,value] of sortedCounts){
        if(k <= 0){
            break
        }
        k-=value
        answer +=1
    }
    return answer;
}