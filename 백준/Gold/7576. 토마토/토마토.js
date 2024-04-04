const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

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
const [m, n] = input[0].split(" ").map(Number)
const graph = input.slice(1).map((row) => row.split(" ").map(Number))

const startPosition = new Queue()
graph.forEach((row, ridx) =>
  row.forEach((val, cidx) => {
    if (val === 1) {
      startPosition.enqueue([ridx, cidx])
    }
  }),
)

let day = 0



const bfs = (queue) => {
  const move = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]

  while (queue.size() > 0) {
    const [x, y] = queue.dequeue()
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + move[i][0], y + move[i][1]]
      if (nx < 0 || ny < 0 || nx >= n || ny >= m || graph[nx][ny] !== 0) {
        continue
      }
      graph[nx][ny] = graph[x][y] + 1
      queue.enqueue([nx,ny])
    }
  }
}

bfs(startPosition)
const isAlreadyDone = graph.some((row) => row.some((value) => value === 0))

if (isAlreadyDone) {
  console.log(-1)
} else {
  day = Math.max(...graph.flatMap((row)=>Math.max(...row)))
  console.log(day === 0 ? 0 : day-1)
}
