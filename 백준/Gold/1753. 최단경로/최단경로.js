const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [v, e] = input[0].split(" ").map(Number)

const distance = Array.from({ length: v + 1 }, () => Infinity)
const k = Number(input[1])
const graph = Array.from({ length: v + 1 }, () => [])

for (let i = 2; i < 2 + e; i += 1) {
  const [u, v, w] = input[i].split(" ").map(Number)
  graph[u].push([v, w]) // u -> v 가중치 w
}

class MinHeap {
  constructor() {
    this.heap = []
  }

  push(value) {
    this.heap.push(value)
    if (this.heap.length === 1) {
      return
    }
    this.bubbleUp()
  }
  bubbleUp() {
    let currentIndex = this.heap.length - 1
    let parentIndex = Math.floor((currentIndex - 1) / 2)
    while (parentIndex >= 0) {
      let parent = this.heap[parentIndex]
      if (parent[0] > this.heap[currentIndex][0]) {
        const tmp = parent
        this.heap[parentIndex] = this.heap[currentIndex]
        this.heap[currentIndex] = tmp
        currentIndex = parentIndex
        parentIndex = Math.floor((currentIndex - 1) / 2)
      } else {
        break
      }
    }
  }

  pop() {
    if (this.heap.length === 0) return
    if (this.heap.length === 1) return this.heap.pop()
    const returnValue = this.heap[0]
    if (this.heap.length === 2) {
      const last = this.heap.pop()
      this.heap[0] = last
      return returnValue
    }
    this.bubbleDown()
    return returnValue
  }
  bubbleDown() {
    const current = this.heap.pop()
    this.heap[0] = current
    let currentIndex = 0
    while (true) {
      let leftIndex = currentIndex * 2 + 1
      let rightIndex = currentIndex * 2 + 2
      let swap = null
      if (leftIndex < this.heap.length && this.heap[leftIndex] !== undefined) {
        if (this.heap[leftIndex][0] < this.heap[currentIndex][0]) {
          swap = leftIndex
        }
      }

      if (
        rightIndex < this.heap.length &&
        this.heap[rightIndex] !== undefined
      ) {
        if (
          (swap === null &&
            this.heap[rightIndex][0] < this.heap[currentIndex][0]) ||
          (swap !== null && this.heap[leftIndex][0] > this.heap[rightIndex][0])
        ) {
          swap = rightIndex
        }
      }

      if (swap === null) {
        break
      }
      const tmp = this.heap[currentIndex]
      this.heap[currentIndex] = this.heap[swap]
      this.heap[swap] = tmp
      currentIndex = swap
    }
  }
  getLength() {
    return this.heap.length
  }
}

const dijkstra = (start) => {
  const queue = new MinHeap()
  queue.push([0, start]) // 거리 , 노드

  distance[start] = 0

  while (queue.getLength() > 0) {
    const [dist, curNode] = queue.pop()

    for (let nextNode of graph[curNode]) {
      const [v, w] = nextNode
      if (distance[v] <= dist + w) {
        continue
      }
      distance[v] = dist + w
      queue.push([distance[v], v])
    }
  }
}

dijkstra(k)
const answer = []
for (let i = 1; i <= v; i += 1) {
  const dist = distance[i]
  answer.push(dist === Infinity ? "INF" : dist)
}
console.log(answer.join('\n'))
