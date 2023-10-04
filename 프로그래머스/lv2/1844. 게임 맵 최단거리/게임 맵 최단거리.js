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

    let n = maps.length // 행
    let m = maps[0].length // 열
    // 거리 저장할 graph 선언
    const distance = Array.from({length:n}, ()=>new Array(m).fill(0))

    let start = [0,0] // 시작 위치
    distance[0][0] = 1
    queue = new Queue() // 큐
    queue.enqueue(start)
    const idx = [0,1,2,3]
    // idx.forEach((v,i)=>console.log(v,i))
    let move = [[0,1],[0,-1],[1,0],[-1,0]] // 행 방향 , 동 서 남 북
    // let dy = [1,-1,0,0] // 열 방향 , 동 서 남 북
    while (queue.size()){
        let [x,y] = queue.dequeue()
        for (let i=0;i<4;i++){
            let [nx,ny] = [x+move[i][0],y+move[i][1]]

            if ((n>nx && nx>=0) && (ny>=0 && ny<m)){

                if (distance[nx][ny] ===0 && maps[nx][ny] === 1){
                    distance[nx][ny] = distance[x][y] +1
                    queue.enqueue([nx,ny])

                }
            }
        }
    }
    // console.log(distance)
    return distance[n-1][m-1] === 0 ? -1 : distance[n-1][m-1]
}
function solution(maps) {
    var answer = 0;
    answer = bfs(maps)
    return answer;
}