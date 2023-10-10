function solution(arr) {
    var answer = [];
    let x = 0
    while (2**x <arr.length){
        x+=1
    }
    answer = Array.from([...arr,...new Array(2**x-arr.length).fill(0)])
    return answer;
}