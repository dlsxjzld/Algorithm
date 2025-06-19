function solution(seoul) {
    var answer = '';
    const target = "Kim"
    const index = seoul.indexOf(target)
    answer = `김서방은 ${index}에 있다`
    return answer;
}