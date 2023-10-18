function solution(myString) {
    var answer = '';
    answer = myString.split('').map(v=>v<'l'?'l':v).join('')
    return answer;
}