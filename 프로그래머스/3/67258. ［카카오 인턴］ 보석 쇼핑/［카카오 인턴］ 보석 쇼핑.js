function solution(gems) {
    const cnt = new Set(gems).size
    var answer = [1,gems.length];
    
    let start=0,end=0
    const hit = new Map()
    hit.set(gems[0],1)
    
    
    while(end<gems.length){
        if(hit.size === cnt){
            if(answer[1]-answer[0]>end-start){
                answer = [start+1,end+1]
            }
            hit.set(gems[start],hit.get(gems[start])-1)
            if(hit.get(gems[start]) === 0){
                hit.delete(gems[start])
            }
            start ++
        }else{
            end++
            hit.set(gems[end],hit.get(gems[end]) + 1 || 1)
        }
    }
    
    return answer;
}