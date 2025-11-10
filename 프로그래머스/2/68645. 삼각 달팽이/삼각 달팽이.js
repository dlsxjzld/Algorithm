function solution(n) {
    var answer = [];
    // 달팽이의 움직임 주기 3번
    const move = [[1,0],[0,1],[-1,-1]]
    
    // 삼각형
    const triangle = Array.from({length:n},(_,i)=>Array.from({length:i+1},()=>0))

    
    
    // 앞으로 이동할 값들
    const nextMoves = Array.from({length:n},(_,i)=>n-i)
  
    // 시작 지점은 0,-1
    let x = -1
    let y = 0
    
    // 시작 값은 0
    let cur = 0

    for(let i=0;i<n;i+=1){
        const nextMove = nextMoves[i]

        const nextDir = i%3
        const [dx,dy] = move[nextDir]
        for(let j=0;j<nextMove;j+=1){

            x += dx
            y += dy
            cur+=1

            triangle[x][y] = cur
        }
    }
    answer = triangle.flat()
    return answer;
}