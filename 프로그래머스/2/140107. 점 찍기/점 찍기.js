function solution(k, d) {
    var answer = 0;

    for(let x=0;x<=d;x+=k){
        answer += parseInt((d**2-x**2)**0.5 / k)+1
        
    }
    return answer;
}