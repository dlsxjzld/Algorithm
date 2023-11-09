function plus(val1,val2){
    return val1+val2
}
function minus(val1,val2){
    return val1-val2
}
function multi(val1,val2){
    return val1*val2
}
function solution(expression) {
    var answer = 0;
    const operands = [
        ['*','+','-'],['*','-','+'],['+','*','-'],
        ['+','-','*'],['-','+','*'],['-','*','+'],
    ]
    
    const stack = []
    let num = ''
    // 수식을 배열로 변환
    expression.split('').forEach((val,idx)=>{
        if(isNaN(val)){
            stack.push(Number(num))
            num = ''
            stack.push(val)
           }
        else{
             num+=val
        }
    })
    stack.push(Number(num))
    
    // 연산문자의 우선순위 조합들(6가지)을 순회
    operands.forEach(operand=>{
        const tmpStack = [...stack];
        // 배열로 변환한 수식을 각 연산자 우선순위에 따라 진행
        [...operand].forEach((op,idx)=>{
            while(tmpStack.indexOf(op) !== -1){
                // 수식에서 찾는 연산자가 없을 때까지 반복
                let idx = tmpStack.indexOf(op)
                let result = 0
                // 연산자에 따라 계산하기
                if(op === '+'){
                    result = plus(tmpStack[idx-1],tmpStack[idx+1])
                }else if(op === '-'){
                    result = minus(tmpStack[idx-1],tmpStack[idx+1])
                }else{
                    result = multi(tmpStack[idx-1],tmpStack[idx+1])
                }
                // 배열로 변환한 수식에서 피연산자1, 연산자, 피연산자2 까지 삭제
                tmpStack.splice(idx-1,3)
                // 연산된 값 다시 배열로 변환한 수식에 넣어주기
                tmpStack.splice(idx-1,0,result)
            }
        });
        // 연산자 조합들 한번씩 돌 때마다 정답 갱신
        answer = Math.max(Math.abs(tmpStack[0]),answer)

    })
    
    return answer;
}