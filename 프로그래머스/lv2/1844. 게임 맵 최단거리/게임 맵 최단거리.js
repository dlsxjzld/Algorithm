class Queue{
    constructor(){
        this.queue = []
        this.front = 0
        this.rear = 0
    }
    enqueue(value){
        this.queue[this.rear++] = value
    }
    dequeue(){
        const value = this.queue[this.front]
        delete this.queue[this.front]
        this.front+=1
        return value
    }
    size(){
        return this.rear-this.front
    }
}

function bfs(maps){
    let n = maps.length // 행 길이
    let m = maps[0].length // 열 길이
    // 거리 저장할 distance 선언
    const distance = Array.from({length:n}, ()=>new Array(m).fill(0))
    let start = [0,0] // 시작 위치
    distance[0][0] = 1 // [1,1] 부터 [n,m]까지
    queue = new Queue() // 큐
    queue.enqueue(start)
    const idx = [0,1,2,3]

    let move = [[0,1],[0,-1],[1,0],[-1,0]] // [행,열] 방향 , 동 서 남 북

    while (queue.size()){
        // 큐가 살아있는 동안 ( 맵에서 갈 곳이 있다면 )
        let [x,y] = queue.dequeue()
        for (let i=0;i<4;i++){
            let [nx,ny] = [x+move[i][0],y+move[i][1]]
            // nx,ny 다음 갈 곳
            if ((n>nx && nx>=0) && (ny>=0 && ny<m)){
                // 0,0 부터 n-1, m-1 까지만 갈 수 있음
                if (distance[nx][ny] ===0 && maps[nx][ny] === 1){
                    // distance[nx][ny] === 0 이면 아직 안 간 곳이므로 갱신해준다.
                    // 그리고 맵에서 길인 곳으로만 다녀야 하므로 maps[nx][ny] === 1 조건 추가.
                    distance[nx][ny] = distance[x][y] +1
                    queue.enqueue([nx,ny]) // queue에 다음 시작 지점 추가
                }
            }
        }
    }
    return distance[n-1][m-1] === 0 ? -1 : distance[n-1][m-1]
}
function solution(maps) {
    var answer = 0;
    answer = bfs(maps)
    return answer;
}