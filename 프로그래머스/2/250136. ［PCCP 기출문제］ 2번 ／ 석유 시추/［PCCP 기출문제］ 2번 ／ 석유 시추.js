function solution(land) {
    var answer = 0;
    const n = land.length
    const m = land[0].length
    
    // 열은 배열 형태
    const cols = Array.from({length:m},()=>[])
    
    // 이미 방문한 곳인지 확인
    const visited = Array.from({length:n},()=>Array.from({length:m},()=>false))
    
    // 동 서 남 북
    const move = [[0,1],[0,-1],[1,0],[-1,0]] 
    
    // 땅 속에서 석유 시추 덩어리 찾기
    const bfs = (sx,sy)=>{
        const queue = [[sx,sy]]
        let index = 0
        let cnt= 1
        const colsForOil = new Set([sy])
        
        while(queue.length >index){
            const [x,y] = queue[index++]
            
            for(let i=0;i<4;i+=1){
                const [dx,dy] = move[i]
                const [nx,ny] = [x+dx,y+dy]
                
                if(nx <0 || ny<0 || nx>=n || ny>=m || visited[nx][ny] || land[nx][ny] === 0){
                    continue
                }
                visited[nx][ny] = true
                queue.push([nx,ny])
                cnt += 1
                colsForOil.add(ny)
            }
        }
        
        

                
        for(let col of colsForOil){
            cols[col].push(cnt)
        }
    }
    for(let i=0;i<n;i+=1){
        for(let j=0;j<m;j+=1){
            // 0이면 빈 땅을, 1이면 석유
            if(!visited[i][j] && land[i][j]){
                visited[i][j] = true
                bfs(i,j)
            }
        }
    }
    
    // 각 덩어리의 크기를 구하고
    // 열의 정보들 담아서, 이 열들에 덩어리의 크기 할당
    
    
    answer = Math.max(...cols.map((col)=>col.reduce((a,b)=>a+b,0)).flat())
    
    
    return answer;
}