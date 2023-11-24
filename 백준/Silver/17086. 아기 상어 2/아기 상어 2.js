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
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
const graph = input.slice(1, n + 1).map((row) => row.split(" ").map(Number));
const visited = Array.from({ length: n }, () =>
  Array.from({ length: m }, () => false)
);
const babySharks = new Queue();

for (let ridx = 0; ridx < n; ridx += 1) {
  for (let cidx = 0; cidx < m; cidx += 1) {
    if (graph[ridx][cidx] === 1) {
      babySharks.enqueue([ridx, cidx]);
      visited[ridx][cidx] = true;
    }
  }
}
const dx = [0, 1, 1, 1, 0, -1, -1, -1]; // 동 동남 남 남서 서 서북 북 북동
const dy = [1, 1, 0, -1, -1, -1, 0, 1];

function bfs() {
  while (babySharks.size() > 0) {
    const [x, y] = babySharks.dequeue();

    for (let i = 0; i < 8; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || ny < 0 || nx >= n || ny >= m || visited[nx][ny] === true)
        continue;
      if (visited[nx][ny] === false) {
        visited[nx][ny] = true;
        graph[nx][ny] = graph[x][y] + 1;
        babySharks.enqueue([nx, ny]);
      } else if ((visited[nx][ny] = true)) {
        if (graph[nx][ny] > graph[x][y] + 1) {
          graph[nx][ny] = graph[x][y] + 1;
        }
      }
    }
  }
}

bfs();

const answer = Math.max(...graph.map((row) => Math.max(...row)));
console.log(answer - 1);
