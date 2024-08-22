function rotate(x1,y1,x2,y2,nextBoard){
    let min = Number.MAX_SAFE_INTEGER
    
    let tmp = nextBoard[x1][y2] // 모서리(꼭지점)
    for(let col=y2;col>y1;col--){ 
        nextBoard[x1][col] = nextBoard[x1][col-1]
        min = Math.min(min,nextBoard[x1][col])
    }

    
    let tmp2 = nextBoard[x2][y2]
    for(let row=x2;row>x1;row--){
        nextBoard[row][y2] = nextBoard[row-1][y2]
        if(row === x1+1){
            nextBoard[row][y2] = tmp
        }
        min = Math.min(min,nextBoard[row][y2])
    }
    
    let tmp3 = nextBoard[x2][y1]
    for(let col=y1;col<y2;col++){
        nextBoard[x2][col] = nextBoard[x2][col+1]
        if(col === y2-1){
            nextBoard[x2][col] = tmp2
        }
        min = Math.min(min,nextBoard[x2][col])
    }
    
    let tmp4 = nextBoard[x1][y1]
    for(let row=x1;row<x2;row++){
        nextBoard[row][y1] = nextBoard[row+1][y1]
        if(row === x2-1){
            nextBoard[row][y1] = tmp3
        }
        min = Math.min(min,nextBoard[row][y1])
    }
    return {rotatedBoard:nextBoard,min}
}

function solution(rows, columns, queries) {
    var answer = [];
    let original = Array.from({length:rows},(_,r)=>Array.from({length:columns},(__,c)=>r*columns+c+1))

    const [x1,y1,x2,y2] = queries[0]

    let {rotatedBoard:nextBoard,min} = rotate(x1-1,y1-1,x2-1,y2-1,original.map((row)=>[...row]))

    answer.push(min)
    for(const query of queries.slice(1)){
        const [x1,y1,x2,y2] = query
        let {rotatedBoard,min} = rotate(x1-1,y1-1,x2-1,y2-1,nextBoard)
        answer.push(min)

        nextBoard = rotatedBoard.map((row)=>[...row])
    }

    return answer;
}