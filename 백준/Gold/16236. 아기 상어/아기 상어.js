class Queue {
    constructor() {
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }
    enqueue(value) {
        this.queue[this.rear++] = value;
    }
    dequeue() {
        const returnValue = this.queue[this.front];
        delete this.queue[this.front];
        this.front++;
        return returnValue;
    }
    size() {
        return this.rear - this.front;
    }
}
const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

// 거리 비교 우선순위 : 거리, 가장 위, 가장 왼쪽
// 거리 매번 새로 비교해야함
// 크기가 작으면 먹을 수 있음. 먹으면 빈칸 됨
// 크기가 같으면 먹지는 못하고 이동은 가능

const n = Number(input[0]);
const graph = input.slice(1, n + 1).map((row) => row.split(" ").map(Number));

let sharkSize = 2; // 아기 상어의 크기
// 상어의 초기 위치
let x = 0;
let y = 0;
let time = 0; // 잡아먹을 수 있는 시간

let cnt = 0; // 잡아먹은 물고기 수

while (true) {
    graph.forEach((row, ridx) => {
        row.forEach((val, cidx) => {
            if (val === 9) {
                [x, y] = [ridx, cidx];
            }
        });
    });

    const newFish = bfs(x, y, graph, sharkSize);
    if (newFish === null) break;

    const [nx, ny, distance] = newFish;

    time += distance;
    graph[x][y] = 0;
    graph[nx][ny] = 9;
    // [x, y] = [nx, ny];

    cnt += 1;
    if (cnt === sharkSize) {
        sharkSize += 1;
        cnt = 0;
    }
}
console.log(time);

// 먹을 수 있는 물고기들 다 먹고 그래프 갱신하고, 상어 사이즈 바꾸고 시간 return
function bfs(x, y, graph, sharkSize) {
    const queue = new Queue();
    queue.enqueue([x, y]);
    const dx = [0, 0, 1, -1];
    const dy = [1, -1, 0, 0];

    const tmpGraph = Array.from({ length: n }, () =>
        Array.from({ length: n }, () => 0)
    );
    const tmpVisited = Array.from({ length: n }, () =>
        Array.from({ length: n }, () => false)
    );
    tmpVisited[x][y] = true;
    const tmpFish = [];

    while (queue.size() > 0) {
        const [x, y] = queue.dequeue();
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;

            if (graph[nx][ny] <= sharkSize && tmpVisited[nx][ny] === false) {
                queue.enqueue([nx, ny]);
                tmpGraph[nx][ny] = tmpGraph[x][y] + 1;
                tmpVisited[nx][ny] = true;
                if (graph[nx][ny] < sharkSize && graph[nx][ny] !== 0) {
                    tmpFish.push([nx, ny, tmpGraph[nx][ny]]);
                }
            }
        }
    }
    if (tmpFish.length === 0) {
        return null;
    }

    tmpFish.sort((a, b) => {
        if (a[2] < b[2]) {
            return -1;
        } else if (a[2] === b[2]) {
            if (a[0] < b[0]) {
                return -1;
            } else if (a[0] === b[0]) {
                if (a[1] < b[1]) {
                    return -1;
                }
            }
        } else {
            return 1;
        }
    });

    return tmpFish[0];
}
