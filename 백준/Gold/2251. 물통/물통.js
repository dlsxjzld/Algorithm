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

const [a, b, c] = input[0].split(" ").map(Number)
const waterTank = [0, 0, c]

const answer = new Set([c])
let visited = Array.from({ length: 201 }, () =>
  Array.from({ length: 201 }, () => Array(201).fill(false)),
)

const bfs = () => {
  const queue = [[0, 0, c]]

  while (queue.length > 0) {
    const [x, y, z] = queue.shift()

    if (!visited[x][y][z]) {
      visited[x][y][z] = true
      if (x === 0) {
        answer.add(z)
      }

      // c -> b
      if (y < b && z >= b - y) {
        queue.push([x, b, z - (b - y)])
      }
      if (y < b && z < b - y) {
        queue.push([x, y + z, 0])
      }
      
      // c -> a
      if (x < a && z >= a - x) {
        queue.push([a, y, z - (a - x)])
      }
      if (x < a && z < a - x) {
        queue.push([x+z, y, 0])
      }

      // b -> a
      if (x < a && y >= a - x) {
        queue.push([a, y - (a - x), z])
      }
      if (x < a && y < a - x) {
        queue.push([x + y, 0, z])
      }
      // b -> c
      if (z < c && y >= c - z) {
        queue.push([x, y - (c - z), c])
      }
      if (z < c && y < c - z) {
        queue.push([x, 0, z + y])
      }
      // a -> b
      if (y < b && x >= b - y) {
        queue.push([x - (b - y), b, z])
      }
      if (y < b && x < b - y) {
        queue.push([0, y + x, z])
      }
      // a -> c
      if (z < c && x >= c - z) {
        queue.push([x - (c - z), y, c])
      }
      if (z < c && x < c - z) {
        queue.push([0, y, z + x])
      }
    }
  }
}
// c -> b
// c -> a
// b -> a
// b -> c
// a -> b
// a -> c
bfs()

const result = Array.from(answer).sort((a, b) => a - b)
console.log(result.join(' '))
