const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

const [m, n] = input[0].split(" ").map(Number);
const graph = input.slice(1, n + 1).map((row) => row.split(" ").map(Number));
let day = 0;

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
        this.front += 1;
        return returnValue;
    }
    size() {
        return this.rear - this.front;
    }
}

// 익은 토마토 위치 고르기
const starts = new Queue()
graph.forEach((row, ridx) => {
    row.forEach((tomato, cidx) => {
        if (tomato === 1) {
            starts.enqueue([ridx, cidx]);
        }
    });
});

// bfs
const dx = [0, 0, 1, -1]; // 동서남북
const dy = [1, -1, 0, 0];
while (starts.size() > 0) {
    const [x, y] = starts.dequeue();
    for (let idx = 0; idx < 4; idx++) {
        const nx = x + dx[idx];
        const ny = y + dy[idx];

        if (nx < 0 || ny < 0 || nx >= n || ny >= m) {
            continue;
        }
        if (graph[nx][ny] === 0) {
            graph[nx][ny] = graph[x][y] + 1;
            starts.enqueue([nx, ny]);
        }
    }
}

graph.forEach((row) => (day = Math.max(day, ...row)));

graph.forEach((row) => {
    if (row.some((tomato) => tomato === 0)) {
        day = -1;
    }
});

console.log(day !== -1 ? day - 1 : day);
