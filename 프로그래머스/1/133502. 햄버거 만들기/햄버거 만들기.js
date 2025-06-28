function solution(ingredient) {
    var answer = 0;
    const stack = []
    
    for(let i of ingredient){
        stack.push(i)
        
        const tmp = stack.slice(stack.length-4)
        if(tmp.join('') === '1231'){
            for(let i=0;i<4;i+=1){
                stack.pop()
            }
            answer +=1
        }
        
    }
    return answer;
}