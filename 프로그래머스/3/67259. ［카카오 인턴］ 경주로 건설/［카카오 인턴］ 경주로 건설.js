const MAX = Number.MAX_SAFE_INTEGER
function solution(board) {
    var answer = 0;
    const dirs = [[0,1],[1,0],[0,-1],[-1,0]] // 동 남 서 북
    
    const distance = Array.from({length:board.length},
                                ()=>Array.from({length:board.length},
                                ()=>Array.from({length:dirs.length},
                                ()=>MAX)))
    function bfs(){
        // x, y, 현재 dir, cost
        const queue = [[0,0,0,0],[0,0,1,0]] // 초기 방향은 동, 남
        
        while(queue.length>0){
            const [x,y,currDir,cost] = queue.shift()
            for(let nextDir=0; nextDir<4;nextDir++){
                // 다음 x, 다음 y
                const [nx,ny] = [x+dirs[nextDir][0] , y+dirs[nextDir][1]] 
                
                // board 범위 내에서, 길인 경우만
                if(nx<0 || ny<0 || nx>=board.length || ny>=board.length || board[nx][ny] === 1){
                    continue
                }
                
                const newCost = cost + (nextDir === currDir ? 100 : 600)
                if(newCost < distance[nx][ny][nextDir] ){
                    distance[nx][ny][nextDir] = newCost
                    queue.push([nx,ny,nextDir,newCost])
                }
                
            }
        }
    }
    bfs()

    answer = Math.min(...distance[board.length-1][board.length-1])
    return answer;
}