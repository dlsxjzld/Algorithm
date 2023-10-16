
function solution(numbers, target) {
    var answer = 0;
    let idx = 0
    
    const dfs = function (depth, total){
        if (depth >= numbers.length){
            answer+= total === target ? 1 : 0
            return
        }
            dfs(depth+1,total+numbers[depth])
            dfs(depth+1,total-numbers[depth])
        }
    dfs(idx,0)
    
    return answer;
}