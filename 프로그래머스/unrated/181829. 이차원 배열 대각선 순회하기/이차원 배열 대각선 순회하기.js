function solution(board, k) {
    var answer = 0;
    
    board.forEach((v,i)=>v.forEach((value,j)=>answer += i+j<=k ? value:0))
    return answer;
}