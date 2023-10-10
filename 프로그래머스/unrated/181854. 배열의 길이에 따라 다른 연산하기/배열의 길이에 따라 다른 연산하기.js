function solution(arr, n) {
    var answer = [];
    arr.length %2 === 0 ? arr.forEach((v,i)=> {if(i%2 === 1) {arr[i] +=n}}) :arr.forEach((v,i)=> {if(i%2 ===0) {arr[i] +=n} })
    answer = arr
    return answer;
}