function solution(queue1, queue2) {
    var answer = -1;
    // 3 2 7 2 , 4 6 5 1
    // queue1: 14 0~3
    // queue2: 16 4~7
    
    // 3 , 2 7 2 , 4 6 5 1
    // queue1: 11 1~3
    // queue2: 19 4~8(0)
    
    // 3 , 2 7 2 4, 6 5 1
    // queue1: 15 1~4
    // queue2: 15 5~8
    const queue = [...queue1,...queue2]
    const sum = queue.reduce((prev,cur)=>prev+cur,0)
    
    let sum1 = queue1.reduce((prev,cur)=>prev+cur,0)
    let start1 = 0 // queue1의 시작
    let end1 = queue1.length-1 // queue1의 끝
    let start2 = queue2.length // queue2의 시작
    let end2 = queue.length-1 // queue2의 끝
    
    let cnt = 0
    while(cnt <= queue.length * 2){
        if(sum1<sum/2){
            end1+=1
            sum1 += queue[end1%queue.length]
            cnt+=1
        }else if(sum1 > sum/2){
            sum1 -= queue[start1%queue.length]
            start1+=1
            cnt+=1
        }else{
            answer = cnt
            break
        }
    }
    
    
    
    return answer;
}