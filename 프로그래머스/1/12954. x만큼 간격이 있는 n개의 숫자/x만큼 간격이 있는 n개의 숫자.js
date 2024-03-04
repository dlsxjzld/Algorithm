function solution(x, n) {
    var answer = Array.from({length:n},(v,i)=>(i+1)*x);
    return answer;
}