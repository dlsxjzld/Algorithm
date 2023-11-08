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
    
    operands.forEach(operand=>{
        const tmpStack = [...stack];
        [...operand].forEach((op,idx)=>{
            while(tmpStack.indexOf(op) !== -1){
                let idx = tmpStack.indexOf(op)
                let result = 0
                if(op === '+'){
                    result = plus(tmpStack[idx-1],tmpStack[idx+1])
                }else if(op === '-'){
                    result = minus(tmpStack[idx-1],tmpStack[idx+1])
                }else{
                    result = multi(tmpStack[idx-1],tmpStack[idx+1])
                }
                tmpStack.splice(idx-1,3)
                tmpStack.splice(idx-1,0,result)
            }

    });
        answer = Math.max(Math.abs(tmpStack[0]),answer)

    }
    )
    
    return answer;
}