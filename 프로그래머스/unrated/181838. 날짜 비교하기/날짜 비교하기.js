function solution(date1, date2) {
    var answer = 0;
    answer = date1.join('') - date2.join('') <0 ? 1:0
    return answer;
}