function solution(board) {
    var answer = Number.MAX_SAFE_INTEGER
    // 최소 비용 -> bfs
    const n = board.length
    
    // 벽(1)은 못 감 
    // 빈 칸(0)은 감
    
    // 직선 도로와 코너를 판단 -> 이전에 온 방향과 다음 방향이 필요함
    const checkTypeOfBuild = (prevMoveIndex,nextMoveIndex) =>{
        return prevMoveIndex === nextMoveIndex ? 'line' : 'corner'
    }
    // 직선 도로 100 
    // 코너 500
    
    // 도로 연결 시 (칸 + 칸 연결)
    // 코너 만들면 (+ 코너 1개 + 직선 1개)
    // 직선이면 (+ 직선 1개)
    
    // 동 서 남 북
    const move = [[0,1],[0,-1],[1,0],[-1,0]] 
    const visited = Array.from({length:n},()=>Array.from({length:n},()=>Array.from({length:4},()=>Number.MAX_SAFE_INTEGER)))
    
    
    const bfs = ()=>{
        const queue = [] // x,y,cost, prevMove
        if(board[0][1] === 0){
            visited[0][1][0] = 100
            queue.push([0,1,100,0])
        }
        
        if(board[1][0] === 0){
            visited[1][0][2] = 100
            queue.push([1,0,100,2])
        }
        
        let index = 0
        // 단순 최단 거리는 아니다. 도달할 수 있는 방법은 많지만 최소 비용
        while(queue.length>index){
            const [x,y,cost,prevMove] = queue[index++]
            
            if(x === n-1 && y === n-1){
                continue
            }
            
            for(let i=0;i<4;i+=1){
                const [dx,dy] = move[i]
                const nx = x+dx
                const ny = y+dy
                
                const buildType = checkTypeOfBuild(prevMove,i)
                const nextCost = buildType === 'line' ? 100 : 600
                
                if(nx<0 || ny<0 || nx>=n || ny >=n || board[nx][ny]){
                    continue
                }
                // 초기 시작점에서 출발할 때는 무조건 직선만 만들어짐
                // 이전 방향이 없어서 예외처리하기
                
               if(visited[nx][ny][i] > nextCost + cost) {
                   queue.push([nx,ny,cost+nextCost,i])
                   visited[nx][ny][i] = nextCost + cost
               }
               
               
                
                
            }
            
        }
    }
    bfs()

    answer = Math.min(...visited[n-1][n-1],answer)
    
    return answer;
}