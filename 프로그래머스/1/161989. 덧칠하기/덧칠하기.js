function solution(n, m, section) {
    var answer = 0;
    let curIdx = 0
    let nextIdx = curIdx+1
    while(curIdx<section.length){
        const cur = section[curIdx]
        const next = section[nextIdx]
        
        if(cur+m > next){
            nextIdx+=1
        }else{
            answer +=1
            curIdx = nextIdx
            nextIdx = curIdx+1
        }
    }
    
    return answer;
}