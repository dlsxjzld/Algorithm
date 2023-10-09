function solution(arr) {
    let answer = [0,0];
    let length= arr.length
    const dfs = function (l,x,y,graph){
    if (l>=1){
    const start = graph[x][y]
    let numOfStart = 0
    for(let i=x;i<x+l;i++){
        for(let j=y;j<y+l;j++){
            numOfStart+= (start ===graph[i][j] ? 1:0)
        }
    }
    if (numOfStart !== l*l){
        l /=2
        dfs(l,x,y,graph)
        dfs(l,x+l,y,graph)
        dfs(l,x,y+l,graph)
        dfs(l,x+l,y+l,graph)
    }else{
        answer[start]+=1
        return
        }
    }
    
}
    dfs(length,0,0,arr)
    
    return answer;
}