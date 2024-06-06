const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

class MinHeap {
  constructor() {
    this.heap = []
  }

  enqueue(value) {
    this.heap.push(value)
    this.bubbleUp()
  }

  bubbleUp() {
    let currentIdx = this.heap.length - 1

    while (currentIdx > 0) {
      let parentIdx = Math.floor((currentIdx - 1) / 2)
      const current = this.heap[currentIdx]
      const parent = this.heap[parentIdx]

      if (current < parent) {
        this.heap[parentIdx] = current
        this.heap[currentIdx] = parent
        currentIdx = parentIdx
      } else {
        break
      }
    }
  }

  size() {
    return this.heap.length
  }

  dequeue() {
    const Length = this.size()
    if (Length === 0) return 0
    if (Length === 1) return this.heap.pop()

    const Min = this.heap[0]
    const End = this.heap.pop()
    this.heap[0] = End

    let currentIdx = 0

    while (true) {
      let leftIdx = currentIdx * 2 + 1
      let rightIdx = currentIdx * 2 + 2
      let current = this.heap[currentIdx]
      let leftChild = null
      let rightChild = null
      let swap = null
      if (leftIdx < this.heap.length) {
        leftChild = this.heap[leftIdx]
        if (leftChild < current) {
          swap = leftIdx
        }
      }
      if (rightIdx < this.heap.length) {
        rightChild = this.heap[rightIdx]
        if (
          (swap === null && rightChild < current) ||
          (swap !== null && rightChild < leftChild)
        ) {
          swap = rightIdx
        }
      }
      if (swap === null) break
      this.heap[currentIdx] = this.heap[swap]
      this.heap[swap] = current
      currentIdx = swap
    }

    return Min
  }
}

const minHeap = new MinHeap()

const nums = input.slice(1).map(Number)
const answer = []

for (let x of nums) {
  if (x === 0) {
    answer.push(minHeap.dequeue())
  } else {
    minHeap.enqueue(x)
  }
}
console.log(answer.join("\n"))
