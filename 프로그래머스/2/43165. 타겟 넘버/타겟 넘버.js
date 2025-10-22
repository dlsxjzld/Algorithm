function solution(numbers, target) {
    var answer = 0;
    
    // 숫자 선택
    // 더하기, 빼기 선택
    
    // 모든 경우를 탐색 후 가능한 방법 찾기
    
    function dfs(depth,sum,target,numbers){
        if(depth === numbers.length){
            if(sum === target){
                answer +=1
            }
            return
        }
        
        dfs(depth+1,sum+numbers[depth],target,numbers)
        dfs(depth+1,sum-numbers[depth],target,numbers)
        
    }
    
    dfs(0,0,target,numbers)
    
    
    return answer;
}