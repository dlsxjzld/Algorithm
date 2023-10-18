function solution(n) {
    var answer = Array.from({length:n},()=>Array(n).fill(0));
    let x = 0
    let y = 0

    let dir = 0
    let dx = [0,1,0,-1]
    let dy = [1,0,-1,0]
    for(let i=0;i<n*n;i++){
        answer[x][y] = i+1
        let nx = x+dx[dir]
        let ny = y+dy[dir]
        if(ny>=n || ny<0 || nx>=n || nx<0 || answer[nx][ny]!==0){
            dir = (dir+1)%4
            nx = x +dx[dir]
            ny = y +dy[dir]
        }
        x = nx
        y = ny
    }
    return answer;
}