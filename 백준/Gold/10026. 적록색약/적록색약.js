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

const n = Number(input[0]);
const graph = input.slice(1, n + 1).map((row) => row.split(""));
const graph_for_RGB = graph.map((row) =>
  row.map((value) => (value = value === "G" ? "R" : value))
);
const visited = Array.from({ length: n }, () =>
  Array.from({ length: n }, () => false)
);
const visited2 = Array.from({ length: n }, () =>
  Array.from({ length: n }, () => false)
);

const dx = [0, 0, -1, 1];
const dy = [1, -1, 0, 0];
let not_RGB = 0;
let RGB = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (visited[i][j] === false) {
      visited[i][j] = true;
      not_RGB += bfs([i, j], graph, visited);
    }
  }
}
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (visited2[i][j] === false) {
      visited2[i][j] = true;
      RGB += bfs([i, j], graph_for_RGB, visited2);
    }
  }
}
console.log(not_RGB, RGB);

function bfs(start, board, visit) {
  const [x, y] = start;
  const color = board[x][y];

  const queue = new Queue();
  queue.enqueue([x, y]);

  while (queue.size() > 0) {
    const [x, y] = queue.dequeue();
    for (let idx = 0; idx < 4; idx++) {
      const nx = x + dx[idx];
      const ny = y + dy[idx];
      if (nx < 0 || ny < 0 || nx >= n || ny >= n || visit[nx][ny] === true)
        continue;
      if (visit[nx][ny] === false && board[nx][ny] === color) {
        visit[nx][ny] = true;
        queue.enqueue([nx, ny]);
      }
    }
  }
  return 1;
}
