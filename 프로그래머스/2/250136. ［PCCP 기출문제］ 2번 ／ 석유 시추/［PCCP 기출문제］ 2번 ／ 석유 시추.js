function solution(land) {
    var answer = 0;
    // 각 열에 얼만큼 포함되었는지 계산하기 -> 각 열은 배열 형태
    // 2차원 배열
    // 1 -> [8]
    // 2 -> [8]
    // ...
    // 7 -> [7,2]
    const row = land.length
    const col = land[0].length
    const oils = Array.from({length:col},()=>[])
    
    // 석유 시추는 한번만 한다
    const visitedLand = Array.from({length:row},()=> Array.from({length:col},()=>false))
    
    const move = [[0,1],[0,-1],[1,0],[-1,0]]
    function bfs([sx,sy]){
        const oilFounded = new Set()
        oilFounded.add(sy)
        
        const queue = [[sx,sy]]
        let index =0
        let cnt = 1
        while(queue.length>index){
            const [x,y] = queue[index++]
            for(let [dx,dy] of move){
                const nx = x+dx
                const ny = y+dy
                if(nx<0 || ny<0 || nx>=row || ny >=col || !land[nx][ny] || visitedLand[nx][ny]){
                    continue
                }
                cnt +=1
                queue.push([nx,ny])
                visitedLand[nx][ny] = true
                oilFounded.add(ny)
            }
        }

        Array.from(oilFounded).forEach((colNum)=>{
            oils[colNum].push(cnt)
        })
        
    }
    
    for(let i=0;i<row;i+=1){
        for(let j=0;j<col;j+=1){
            if(land[i][j] && !visitedLand[i][j]){
                visitedLand[i][j] = true
                bfs([i,j])
            }
        }
    }
    


    
    answer = Math.max(...oils.map((oil)=>oil.reduce((prev,acc)=>acc+prev,0)))
    
    return answer;
}