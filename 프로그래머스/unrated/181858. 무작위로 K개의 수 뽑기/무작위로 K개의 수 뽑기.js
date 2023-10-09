function solution(arr, k) {
    var answer = []
    let arrSet = [...new Set(arr)]
    if (arrSet.length <k){
        answer = arrSet.concat(Array(k-arrSet.length).fill(-1))
    }else{
        answer = arrSet.slice(0,k)
    }

    return answer;
}