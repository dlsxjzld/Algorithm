const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, m] = input[0].split(" ").map(Number)
const graph = input.slice(1).map((row) => row.split("").map(Number))

class Queue {
  constructor() {
    this.queue = []
    this.front = 0
    this.rear = 0
  }
  enqueue(value) {
    this.queue[this.rear++] = value
  }
  dequeue() {
    const value = this.queue[this.front]
    delete this.queue[this.front]
    this.front += 1
    return value
  }
  size() {
    return this.rear - this.front
  }
}

const bfs = () => {
  const queue = new Queue()
  queue.enqueue([0, 0])

  const move = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
  ]

  while (queue.size() > 0) {
    const [x, y] = queue.dequeue()
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + move[i][0], y + move[i][1]]

      if (nx >= 0 && ny >= 0 && nx < n && ny < m && graph[nx][ny] === 1) {

        graph[nx][ny] = graph[x][y] + 1
        queue.enqueue([nx, ny])
      }
    }
  }
}

bfs()

console.log(graph[n-1][m-1])
