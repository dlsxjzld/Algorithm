function solution(board, skill) {
    var answer = 0;
    const n = board.length
    const m = board[0].length
    
    // skill의 각 행은 [type, r1, c1, r2, c2, degree]
    // type은 1 혹은 2입니다.
    // type이 1일 경우는 적의 공격을 의미합니다. 건물의 내구도를 낮춥니다.
    // type이 2일 경우는 아군의 회복 스킬을 의미합니다. 건물의 내구도를 높입니다.
    
    const record = Array.from({length:n+1},()=>Array.from({length:m+1},()=>0))
    
    // -degree  +degree
    // +degree  -degree
    // 가로 다 더하기
    // 세로로 다 더하기
    
    for(let s=0;s<skill.length;s+=1){
        const [type, r1, c1, r2, c2, degree] = skill[s]
        
        record[r1][c1] += type === 1 ? -1*degree : degree
        record[r1][c2+1] += type === 1 ? degree : -1 * degree
        record[r2+1][c1] += type === 1 ? degree : -1 * degree
        record[r2+1][c2+1] += type === 1 ? -1*degree : degree

    }
    for(let x=0;x<n+1;x+=1){
        for(let y=1;y<m+1;y+=1){
            record[x][y] += record[x][y-1]
        }    
    }
        
    for(let y=0;y<m+1;y+=1){
        for(let x=1;x<n+1;x+=1){
            record[x][y] += record[x-1][y]
        }
    }
    
    
    for(let x=0;x<n;x+=1){
        for(let y=0;y<m;y+=1){
            board[x][y] += record[x][y]
        }
    }
    
    for(let x=0;x<n;x+=1){
        for(let y=0;y<m;y+=1){
            if(board[x][y]>0){
                answer +=1
            }
        }
    }
    

    
    
    
    
    return answer;
}