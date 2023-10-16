function solution(m, n, board) {
    var answer = 0;
    board = board.map((v,i)=>v.split(''))
    while(true){
        const target_char = []
        // 2by2 확인 후 4개 중에 가장 왼쪽 위 좌표만 넣기
        for (let mx=0 ; mx<m-1; mx+=1){
            for (let ny=0; ny<n-1;ny+=1){
                if(board[mx][ny] !== '' 
                   && board[mx][ny]== board[mx][ny+1]
                   && board[mx][ny]== board[mx+1][ny]
                   && board[mx][ny]== board[mx+1][ny+1]){
                    target_char.push([mx,ny])
                }
            }
        }
        // 더 이상 2by2가 없으면 종료
        if (target_char.length === 0){
            board.forEach((row)=>row.forEach(v=>v==='' ? answer +=1 : answer +=0))
            break
        }
        
        // 찾은 블록 터트리기
        target_char.forEach(([x,y])=>{
            board[x][y] = ''
            board[x][y+1] = ''
            board[x+1][y] = ''
            board[x+1][y+1] = ''
        })
        
        // 블록 재정렬
        for(let mx=m-1;mx>0;mx-=1){
            // 행에 빈 문자열 없으면 건너뛰기
            if( ! board[mx].some(v=>v==='')) continue
            
            for(let ny=0;ny<n;ny+=1){
                if(board[mx][ny]===''){
                    for(let kx=mx-1;kx>=0;kx-=1){
                        if(board[kx][ny] !==''){
                            board[mx][ny] = board[kx][ny]
                            board[kx][ny] = ''
                            break
                        }
                    }
                }
                
            }   
        }
    }
    return answer;
}