
const move = [[0,1],[0,-1],[1,0],[-1,0]]

const bfs = (maps)=>{
    const queue =[[0,0]]
    let index = 0
    
    const n = maps.length
    const m = maps[0].length

    while(queue.length>index){
        const [x,y] = queue[index++]

        for(let [dx,dy] of move){
            const nx = x+dx
            const ny = y+dy
            if(nx>=0 && ny>=0 && nx< n && ny< m && maps[nx][ny] !== 0 && maps[nx][ny] === 1){
                maps[nx][ny] = maps[x][y] + 1
                queue.push([nx,ny])
            }
        }
    }
    return maps[n-1][m-1] === 1 ? -1 : maps[n-1][m-1]
}

function solution(maps) {
    var answer = 0;
    
    answer = bfs(maps)
    return answer;
}