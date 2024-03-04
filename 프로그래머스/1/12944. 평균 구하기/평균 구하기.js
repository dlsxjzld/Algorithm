function solution(arr) {
    var answer = arr.reduce((prev,cur)=>(prev+cur),0) /arr.length;
    return answer;
}