function solution(s){
    var answer = true;
    const stack = []
    
    for(let char of s){
        if(char === '('){
            stack.push('(')
        }else if(char === ')' ){
            if( stack[stack.length-1] === '(' ){
                stack.pop()    
            }
            else{
                answer = false
            }
        }
    }
    
    if(stack.length>0){
        answer = false
    }

    return answer;
}