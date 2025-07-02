function solution(k, m, score) {
    var answer = 0;
    const sortedScore = score.sort((a,b)=>a-b)
    
    let total = sortedScore.length
    while(total >= m){
        const box = []
        for(let i=0;i<m;i+=1){
            box.push(sortedScore.pop())
            total -= 1
        }
        answer += Math.min(...box) * m
        
    }
    return answer;
}