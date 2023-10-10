function solution(arr1, arr2) {
    var answer = 0;
    let arr1Sum = arr1.reduce((acc,cur)=>(acc+cur),0)
    let arr2Sum = arr2.reduce((acc,cur)=>(acc+cur),0)
    

    answer = arr1.length === arr2.length ? (arr1Sum === arr2Sum ? 0 : (arr1Sum>arr2Sum ? 1 : -1)) : (arr1.length > arr2.length ? 1:-1)
    return answer;
}