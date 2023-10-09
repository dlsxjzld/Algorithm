function solution(myStr) {
    var answer = [];
    myStr = myStr.replaceAll('a',';').replaceAll('b',';').replaceAll('c',';')
    answer = myStr.split(';').filter(v=>v!=='')
    answer.length === 0 ? answer.push("EMPTY") : answer

    return answer;
}