const move = [[0,1],[0,-1],[1,0],[-1,0]]
function bfs(maps){
    const queue =[[0,0]]
    const dist = [...maps.map((row)=>row.map(()=>-1))]
    
    dist[0][0] = 1

    let index = 0
    while(queue.length>index){
        const [x,y] = queue[index++]
        for(let i=0;i<4;i+=1){
            const nx = x+move[i][0]
            const ny = y+move[i][1]
            if(nx<0 || ny<0 || nx>=maps.length || ny >=maps[0].length || maps[nx][ny] ===0 || dist[nx][ny] !== -1){
                continue
            }
            dist[nx][ny] = dist[x][y]+1
            queue.push([nx,ny])
        }
    }

    return dist[maps.length-1][maps[0].length-1]
}
function solution(maps) {
    var answer = 0;
    answer = bfs(maps)
    return answer;
}