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

const bfs = (start,market,target)=>{
  const visited = new Map()

  const queue = new Queue()
  queue.enqueue(start)

  const store = [...market,target]


  while (queue.size() > 0) {
    const [x, y] = queue.dequeue()

    for (let [nx, ny] of store) {
      if (
        visited.has(nx.toString() + ny.toString()) === false &&
        Math.abs(nx - x) + Math.abs(ny - y) <= 1000
      ) {
        if (nx === target[0] && ny === target[1]) {
          return true
        }
        visited.set(nx.toString() + ny.toString(), true)
        queue.enqueue([nx, ny])
      }
    }
  }
  return false
}

const t = Number(input.shift())

for (let tc = 0; tc < t; tc += 1) {
  const n = Number(input.shift())
  const start = input.shift().split(" ").map(Number)
  const market = input.splice(0, n).map((row) => row.split(" ").map(Number))
  const target = input.shift().split(" ").map(Number)
  
  const answer = bfs(start,market,target)
  console.log(answer ? "happy" : "sad")
}
