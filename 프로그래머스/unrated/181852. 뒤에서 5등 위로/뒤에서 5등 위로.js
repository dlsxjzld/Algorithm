function solution(num_list) {
    var answer = [];
    answer = num_list.sort((a,b)=>(a-b)).slice(5,)
    return answer;
}