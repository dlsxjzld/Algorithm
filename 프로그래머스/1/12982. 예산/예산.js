function solution(d, budget) {
    var answer = 0;
    d.sort((a,b)=>a-b)
    for(let x of d){
        if(budget >=x){
            budget -=x
            answer +=1
        }
    }

    return answer;
}