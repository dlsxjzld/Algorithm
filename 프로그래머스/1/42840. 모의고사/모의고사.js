function solution(answers) {
    var answer = [];
    const problems = [0,0,0]
    const first = [1,2,3,4,5]
    const second = [2,1,2,3,2,4,2,5]
    const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    for(let [index,ans] of Object.entries(answers)){
        if(first[(index%first.length)] === ans){
            problems[0] +=1
        }
        if(second[(index%second.length)] === ans){
            problems[1] +=1
        }
        if(third[(index%third.length)] === ans){
            problems[2] +=1
        }
    }
    const MAX = Math.max(...problems)
    answer = problems.map((val,index)=> val === MAX ? index+1 : null).filter(Boolean).sort((a,b)=>a-b)

    return answer;
}