const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [N, M] = input[0].split(" ").map(Number)
const graph = Array.from({ length: N + 1 }, () => [])
input.slice(1).forEach((row) => {
  const [a, b, c] = row.split(" ").map(Number) // a번째 노드에서 b번째 노드로 갈 때 c만큼의 비용
  // console.log("[a,b,c]", a, b, c)
  graph[a].push([b, c])
  graph[b].push([a, c])
})

const distance = Array.from({ length: N + 1 }, () => Number.MAX_SAFE_INTEGER)
distance[1] = 0
// console.log(graph)

// 최소힙 필요
class MinHeap {
  constructor() {
    this.heap = []
    this.length = 0
  }

  push(value) {
    this.heap.push(value)
    this.length += 1

    if (this.length > 1) {
      let currentIndex = this.length - 1
      let parentIndex = Math.floor((currentIndex - 1) / 2)
      while (parentIndex >= 0) {
        if (this.heap[currentIndex][1] < this.heap[parentIndex][1]) {
          const tmp = [...this.heap[parentIndex]]
          this.heap[parentIndex] = this.heap[currentIndex]
          this.heap[currentIndex] = tmp
          currentIndex = parentIndex
          parentIndex = Math.floor((currentIndex - 1) / 2)
        } else {
          break
        }
      }
    }
  }
  pop() {
    if (this.length == 0) return null
    else if (this.length == 1) {
      this.length -= 1
      return this.heap.pop()
    }

    const returnValue = this.heap[0]
    const target = this.heap.pop()
    this.length -= 1
    this.heap[0] = target
    let currentIndex = 0
    while (currentIndex < this.length) {
      let leftIndex = currentIndex * 2 + 1
      let rightIndex = currentIndex * 2 + 2
      let swap = null

      if (leftIndex < this.length) {
        if (this.heap[leftIndex][1] < this.heap[currentIndex][1]) {
          swap = leftIndex
        }
      }
      if (rightIndex < this.length) {
        if (
          (swap != null &&
            this.heap[leftIndex][1] > this.heap[rightIndex][1]) ||
          (swap == null &&
            this.heap[rightIndex][1] < this.heap[currentIndex][1])
        ) {
          swap = rightIndex
        }
      }
      if (swap == null) break
      const tmp = [...this.heap[currentIndex]]
      this.heap[currentIndex] = this.heap[swap]
      this.heap[swap] = tmp
      currentIndex = swap
    }
    return returnValue
  }
  size() {
    return this.length
  }
}

const dijkstra = (graph, distance) => {
  const queue = new MinHeap()
  queue.push([1, 0]) // 1 번 노드로 가는 길, 비용: 0

  while (queue.size() > 0) {
    const [currentNode, distanceToCurrentNode] = queue.pop()
    if (distance[currentNode] < distanceToCurrentNode) continue // 이미 방문했으면 진행 X

    for (let [nextNode, distanceToNextNode] of graph[currentNode]) {
      const cost = distanceToCurrentNode + distanceToNextNode
      if (distance[nextNode] > cost) {
        distance[nextNode] = cost
        queue.push([nextNode, cost])
      }
    }
  }
}

dijkstra(graph,distance)
console.log(distance[N])
