function solution(n) {
    var answer = '';
    for(let i=1;i<=n;i+=1){
        if(i%2){
            answer += '수'
        }else{
            answer += '박'
        }
    }
    return answer;
}