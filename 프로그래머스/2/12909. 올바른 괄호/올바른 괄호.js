function solution(s){
    var answer = true;
    let cnt =0
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    for(let i=0;i<s.length;i+=1){
        if(s[i] ==='('){
            cnt +=1
        }else{
            cnt -=1
        }
        if(cnt <0){
            return false
        }
    }
    
    if(cnt !== 0){
        answer = false
    }

    return answer;
}