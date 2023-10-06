function solution(myString, pat) {
    var answer = 0;
    answer = [...myString]
                .map((v,_)=>v==='A'?'B':'A')
                .join('')
                .includes(pat) === true ? 1:0
    return answer;
}