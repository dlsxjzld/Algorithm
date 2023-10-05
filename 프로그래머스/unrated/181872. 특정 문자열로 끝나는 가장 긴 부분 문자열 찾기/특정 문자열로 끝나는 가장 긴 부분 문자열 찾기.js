function solution(myString, pat) {
    var answer = '';
    let end = myString.lastIndexOf(pat)
    answer = myString.slice(0,end) + pat
    return answer;
}