function pushNumber (nx,ny,graph,num){
    graph[nx][ny] = num
}

function solution(n) {
    var answer = [];
    const graph = Array.from({length:n},(_,idx)=>Array.from({length:idx+1},()=>0))
    // console.log(graph)
    const direction = [[1,0],[0,1],[-1,-1]] // 아래, 오른쪽, 왼쪽위
    
    let dir = -1
    let [x,y] = [-1,0]
    let num = 0
    for(let start=n;start>0;start--){
        dir = (dir+1)%3 // 방향 전환
        const [nx,ny] = direction[dir]
        for(let repeatTime=0;repeatTime<start;repeatTime++){
            x += nx
            y += ny
            num +=1
            pushNumber(x,y,graph,num)
        }
    }
    answer = graph.flatMap((row)=>row)
    return answer;
}