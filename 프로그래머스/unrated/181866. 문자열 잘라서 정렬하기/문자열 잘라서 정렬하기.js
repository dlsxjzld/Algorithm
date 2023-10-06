function solution(myString) {
    var answer = [];
    answer = myString.split('x').filter((v,_)=>v!=='').sort()
    return answer;
}