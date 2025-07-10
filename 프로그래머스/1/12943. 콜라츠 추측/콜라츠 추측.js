function solution(num) {
    var answer = 0;
    let myNum = num
    let cnt = 0
    
    
    
    while(cnt<=500){
        if(myNum === 1){
            answer = cnt
            break
        }
        
        if(myNum % 2 === 0){
            myNum /= 2
        }else{
            myNum = myNum *3 +1
        }
        cnt+=1
    }
    
    if(cnt > 500){
        answer = -1
    }
    
    return answer;
}