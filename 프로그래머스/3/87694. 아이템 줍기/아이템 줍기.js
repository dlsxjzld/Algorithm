function solution(rectangle, characterX, characterY, itemX, itemY) {
    var answer = Number.MAX_SAFE_INTEGER;
    // 테두리가 그려진 그래프가 필요함
    // 겹치는 부분은 빠져야함
    const doubledRectangle = rectangle.map((rect)=>rect.map((point)=>point*2))
    characterX *= 2
    characterY *= 2
    itemX *= 2
    itemY *= 2

    const graph = Array.from({length:103},()=>Array.from({length:103},()=>0))
    for(let rect of doubledRectangle){
        const [lx,ly,rx,ry] = rect
        for(let i=lx;i<=rx;i+=1){
            for(let j=ly;j<=ry;j+=1){
                if(i === lx || i === rx || j === ly || j === ry){
                    if(graph[i][j] === 0){
                        graph[i][j] = 1    
                    }
                }else{
                    graph[i][j] = 2
                }
            }
        }
    }
    
    const move = [[1,0],[0,1],[-1,0],[0,-1]]
    
    const queue =[[characterX,characterY,0]]
    let index =0
    graph[characterX][characterY] = 0 
    while(queue.length > index){
        const [x,y,cnt] = queue[index++]
        
        if(x === itemX && y === itemY){
            answer = cnt/2
            break
        }
        
        for(let [dx,dy] of move){
            const nx = x+dx
            const ny = y+dy
            if(nx<=0 || ny <=0 || nx>=103 || ny>=103 || graph[nx][ny] !== 1){
                continue
            }
            graph[nx][ny] = 0
            queue.push([nx,ny,cnt+1])
            
        }
    }
    
    return answer;
}