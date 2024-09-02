function bfs(r,c,visited,graph){
    const dx = [0,0,1,-1]
    const dy = [1,-1,0,0] // 동서남북
    
    const queue = [[r,c]]
    let index = 0
    let cnt = Number(graph[r][c])
    visited[r][c] = true
    // console.log("graph,r,c,cnt",graph,r,c,cnt)
    while(queue.length > index){
        const [x,y] = queue[index++]
        
        for(let i=0;i<4;i++){
            const nx = x+dx[i]
            const ny = y+dy[i]
            if(nx<0 || ny<0 || nx>=graph.length || ny>=graph[0].length || graph[nx][ny] ==='X'|| visited[nx][ny]){
                continue
            }
            visited[nx][ny] = true
            queue.push([nx,ny])
            cnt += Number(graph[nx][ny])
            // console.log("nx,ny,graph[nx][ny],cnt",nx,ny,graph[nx][ny],cnt)
        }
    }
    // console.log(cnt)
    
    return cnt
}

function solution(maps) {
    var answer = [];
    const graph = maps.map((row)=>row.split(''))
    const row = maps.length
    const col = maps[0].length
    const visited = Array.from({length:row},()=>Array.from({length:col},()=>false))
    
    for(let r=0;r<row;r++){
        for(let c=0;c<col;c++){
            if(maps[r][c] !== 'X' && visited[r][c] === false){
                answer.push(bfs(r,c,visited,graph))
            }
        }
    }
    if(answer.length === 0) answer.push(-1)
    return answer.sort((a,b)=>a-b);
}