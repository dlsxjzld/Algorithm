function solution(strArr) {

    const counter = new Map()
    for(const str of strArr){
        counter.set(str.length,(counter.get(str.length) || 0)+1)
    }
    return Math.max(...counter.values())
}