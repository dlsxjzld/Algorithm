function solution(arr, k) {
    var answer = [];
    answer = k%2===1?arr.map(v=>v*k):arr.map(v=>v+k)
    return answer;
}