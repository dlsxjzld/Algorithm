
function solution(numbers, target) {
    var answer = 0;
    
    function dfs(origin,numbers,target,depth){
        if(numbers.length === origin.length){
            const sum = numbers.reduce((a,b)=>a+b)
            if(sum === target){
                answer +=1
            }
            return
        }

        dfs(origin,[...numbers,origin[depth]],target,depth+1)
        dfs(origin,[...numbers,-origin[depth]],target,depth+1)
    }
    
    
    dfs(numbers,[numbers[0]],target,1)
    dfs(numbers,[-numbers[0]],target,1)

    
    
    return answer;
}