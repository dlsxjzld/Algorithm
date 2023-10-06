function solution(myString) {
    var answer = [];
    myString.split('x').map((v,i)=>answer.push(v.length))
    return answer;
}