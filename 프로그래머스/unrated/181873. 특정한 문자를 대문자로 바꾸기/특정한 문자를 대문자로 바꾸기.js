function solution(my_string, alp) {
    var answer = '';
    answer = my_string.replaceAll(alp,alp.toUpperCase())
    return answer;
}