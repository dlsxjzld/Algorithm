function solution(arr) {
    var answer = [];
    // arr.forEach((v,i)=>(answer.push(Array.from({length:v}).fill(v))))
    // answer = answer.flatMap((v)=>v)
    for(let n = 0; n < arr.length; n++) {
        answer = answer.concat(new Array(arr[n]).fill(arr[n]))
    }
    return answer;
}