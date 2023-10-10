function solution(strArr) {
    var answer = 0;
    const arrLength = Array.from(new Set(strArr.map((str,idx)=>str.length)))
    const result = {}
    for ( const leng of arrLength){
        if (result[leng] === undefined){
            result[leng] = 0
        }
    }

    for (const str of strArr){
        for (const leng of arrLength){
            if (str.length === leng){
                result[leng] += 1
                break
            }
        }
    }

    
    answer = Math.max(...Object.values(result))
    

    return answer;
}