function solution(dartResult) {
    var answer = 0;
    const numeric = '0123456789'


    // 숫자만 골라내기.
    // 숫자 1번째 뒤에는 S,D,T
    // 숫자 2번째 뒤에는 *,# 또는 숫자
    
    let tmp = ''
    const numbers = []
    
    for(let i=0;i<dartResult.length;i+=1){
        
        const cur = dartResult[i]
        if(numeric.includes(cur)){
            tmp += cur
        }else if(cur === 'S'){
            numbers.push(Number(tmp))
            tmp = ''
        }else if(cur === 'D'){
            numbers.push(Number(tmp) ** 2)
            tmp =''
        }else if(cur === 'T'){
            numbers.push(Number(tmp) ** 3)
            tmp =''
        }else if(cur === '*'){
            numbers[numbers.length-1] *= 2
            const second = numbers[numbers.length-2]
            if(second){
                numbers[numbers.length-2] *=2
            }
        }else if(cur === '#'){
            numbers[numbers.length-1] *= -1
        }
    }
    answer = numbers.reduce((a,b)=>a+b,0)
    
    return answer;
}