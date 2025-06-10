function solution(m, n, board) {
    var answer = 0;

    const blockBoard = board.map((row)=>row.split(''))
    
    while(true){
        const hasSomeBlocks = []
        const position = new Set()
        // 전체 보드를 한번 확인한다. 이때 4칸 되는 블록을 전부 확인
        // 4칸이 되면 위치를 기억하고 있어야 한다. 
        // 중복 발생할 수 있으므로 set자료구조로
        for(let r=0;r<m-1;r+=1){
            for(let c=0;c<n-1;c+=1){
                let curBlock = blockBoard[r][c]
              
                let nextBlocksCount = 0
                for(let i=0;i<2;i+=1){
                    const row = r+i
                    for(let j=0;j<2;j+=1){
                        const col = c+j
                        let block = blockBoard[row][col]
                        if(curBlock !==null && block === curBlock){
                            nextBlocksCount +=1
                        }
                    }
                }
                if(nextBlocksCount === 4){
                    for(let i=0;i<2;i+=1){
                        const row = r+i
                        for(let j=0;j<2;j+=1){
                            const col = c+j
                            position.add(`${row},${col}`)
                        }
                    }
                    hasSomeBlocks.push(true)
                }else{
                    hasSomeBlocks.push(false)
                }
                
            }
        }
        // 기록한 칸의 위치에 맞게 지운다.
        const positions = Array.from(position)

        for(let position of positions){
            const [row,col] = position.split(',').map(Number)
            blockBoard[row][col] = null
        }
        // 지운 칸의 위에 존재하는 블록은 내린다. 
        
        for(let c=0;c<n;c+=1){
            for(let r=m-1;r>0;r-=1){
                let cur = blockBoard[r][c]
                if(cur=== null){
                    for(let i=r-1;i>=0;i-=1){
                        if(blockBoard[i][c] !== null){
                            blockBoard[r][c] = blockBoard[i][c]
                            blockBoard[i][c] = null
                            break
                        }
                    }
                }
            }

        }
        
        if(hasSomeBlocks.indexOf(true) === -1){
            break
        }
    }


    for(let r=0;r<m;r+=1){
        for(let c=0;c<n;c+=1){
            if(blockBoard[r][c] === null){
                answer +=1
            }
        }
    }

    
    return answer;
}