function solution(k, score) {
    var answer = [];
    let hall = []
    for(let s of score){
        hall.push(s)
        hall = hall.sort((a,b)=>b-a).slice(0,k)
        answer.push(hall[hall.length-1])
        
    }
    return answer;
}