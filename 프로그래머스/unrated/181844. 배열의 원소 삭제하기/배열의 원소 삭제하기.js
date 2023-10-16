function solution(arr, delete_list) {
    var answer = [];
    for (let i of arr){
        if(delete_list.indexOf(i) <=-1){
            answer.push(i)
        }
    }
    return answer;
}