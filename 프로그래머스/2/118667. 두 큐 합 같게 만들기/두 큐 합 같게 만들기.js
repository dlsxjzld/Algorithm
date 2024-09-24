function solution(queue1, queue2) {
    var answer = -1;
    const queue = [...queue1,...queue2]
    const sum = queue.reduce((a,b)=>a+b,0)
    let sum1 = queue1.reduce((a,b)=>a+b,0)
    let q1pointer = 0
    let q2pointer = queue2.length
    let cnt = 0
    while(cnt<=queue.length*2){
        if(sum1 === sum/2) {
            return cnt
        }else if(sum1<sum/2){
            sum1 += queue[q2pointer++]
        }else if(sum1>sum/2){
            sum1 -= queue[q1pointer++]
        }
        cnt+=1
    }
    return answer;
}