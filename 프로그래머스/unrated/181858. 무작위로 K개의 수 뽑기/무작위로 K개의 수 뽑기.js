function solution(arr, k) {
    
    let set = new Set(arr)
    return set.size<k ? [...set,...Array(k-set.size).fill(-1)] : [...set].slice(0,k)

}