const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

// 최소힙으로 구현하고 계속 넣다가 N개 남을 때까지 다 빼기?
class MinHeap {
  constructor() {
    this.heap = []
  }

  push(value) {
    if (this.heap.length === 0) {
      this.heap.push(value)
      return
    }
    this.heap.push(value)
    this.bubbleUp()
  }
  bubbleUp() {
    let currentIndex = this.heap.length - 1
    let parentIndex = Math.floor((currentIndex - 1) / 2)
    while (parentIndex >= 0) {
      if (this.heap[parentIndex] > this.heap[currentIndex]) {
        const tmp = this.heap[parentIndex]
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
    if (this.heap.length === 0) return null
    if (this.heap.length === 1) {
      return this.heap.pop()
    }
    const returnValue = this.heap[0]
    const current = this.heap.pop()
    this.heap[0] = current

    this.bubbleDown()

    return returnValue
  }

  bubbleDown() {
    let currentIndex = 0
    while (true) {
      let leftIndex = currentIndex * 2 + 1
      let rightIndex = currentIndex * 2 + 2
      let swap = null
      if (leftIndex < this.heap.length) {
        if (this.heap[leftIndex] < this.heap[currentIndex]) {
          swap = leftIndex
        }
      }
      if (rightIndex < this.heap.length) {
        if (
          (swap !== null && this.heap[rightIndex] < this.heap[leftIndex]) ||
          (swap === null && this.heap[rightIndex] < this.heap[currentIndex])
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

let index = -1
let n = null
const minHeap = new MinHeap()
rl.on("line", (input) => {
  if (index === -1) {
    n = Number(input)
    index = n
    return
  }
  const numbers = input.split(" ")
  for (let num of numbers) {
    minHeap.push(Number(num))
    if (minHeap.getLength() > n) {
      minHeap.pop()
    }
  }
  index -= 1
  if (index === 0) {
    rl.close()
  }
})

rl.on("close", () => {
  console.log(minHeap.heap[0])
  process.exit()
})
