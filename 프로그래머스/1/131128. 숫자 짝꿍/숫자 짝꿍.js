function solution(X, Y) {
    var answer = '';
    const num = '9876543210'
    const numX = new Map()
    const numY = new Map()
    
    for(let n of X){
        numX.set(n,(numX.get(n) ?? 0)+1)
    }
    
    for(let n of Y){
        numY.set(n,(numY.get(n) ?? 0)+1)
    }
    
    for(let i of num){
        answer += i.repeat(Math.min(numX.get(i), numY.get(i)))
    }
    
    if(answer === ''){
        answer = '-1'
    }else if(Number(answer) === 0){
        answer = '0'
    }
    
    return answer;
}