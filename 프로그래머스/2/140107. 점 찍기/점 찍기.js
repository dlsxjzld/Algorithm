function solution(k, d) {
    var answer = 0;
    for(let x= 0;x<=d;x+=k){
        let maxY = Math.floor((((d**2)-(x**2))**0.5)/k)
        answer += maxY+1
    }
    return answer;
}