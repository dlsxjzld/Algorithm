function solution(n, computers) {
    var answer = 0;
    const visited = Array.from({length:n},()=>false)

    const dfs = function(start){
        const stack = []
        stack.push(start)
        while(stack.length>0){
            const computer = stack.pop()
            
            computers[computer].forEach((v,i)=> {if (i!==computer && v==1 && visited[i] === false){
                visited[i] = true
                stack.push(i)
            }})
        }
        return 1
    }
    
    for(let idx=0;idx<n;idx++){
        if(!visited[idx]){
            answer += dfs(idx)
        }
    }
    return answer;
}