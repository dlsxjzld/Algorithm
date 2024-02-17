const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

class Queue {
  constructor() {
    this.queue = []
    this.front = 0
    this.rear = 0
  }

  enqueue(item) {
    this.queue[this.rear++] = item
  }
  dequeue() {
    const returnValue = this.queue[this.front]
    delete this.queue[this.front]
    this.front += 1
    return returnValue
  }
  size() {
    return this.rear - this.front
  }
}

const [n, m] = input[0].split(" ").map(Number)
const campus = input.slice(1, 1 + n).map((row) => row.split(""))
const visited = Array.from({ length: n }, () =>
  Array.from({ length: m }, () => false),
)

const dx = [0, 0, 1, -1]
const dy = [1, -1, 0, 0]

const bfs = (sx, sy) => {
  const queue = new Queue()
  queue.enqueue([sx, sy])
  let cnt = 0
  visited[sx][sy] = true

  while (queue.size() > 0) {
    const [x, y] = queue.dequeue()
    

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]]
      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < n &&
        ny < m &&
        !visited[nx][ny] &&
        campus[nx][ny] !== "X"
      ) {
        queue.enqueue([nx, ny])
        visited[nx][ny] = true
        if (campus[nx][ny] === "P") {
          cnt += 1
        }
      }
    }
  }
  console.log(cnt === 0 ? "TT" : cnt)
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (campus[i][j] === "I") {
      bfs(i, j)
    }
  }
}
