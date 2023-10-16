
function solution(numbers, target) {
    var answer = 0;
    let idx = 0
    
    const dfs = function (depth, total,numbers,endOfdepth,target){
        if (depth >= endOfdepth){
            answer+= total === target ? 1 : 0
            return
        }
        else{
            dfs(depth+1,total+numbers[depth],numbers,endOfdepth,target)
            dfs(depth+1,total-numbers[depth],numbers,endOfdepth,target)
            }
        }
    dfs(idx,0,numbers,numbers.length,target)
    // console.log(answer)
    
    return answer;
}