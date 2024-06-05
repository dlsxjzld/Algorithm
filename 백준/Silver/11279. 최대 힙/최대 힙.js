const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const N = Number(input[0])
const calculate = input.slice(1).map(Number)

class MaxHeap {
  constructor() {
    this.heap = []
  }

  bubbleUp() {
    let currentIndex = this.heap.length - 1

    while (currentIndex > 0) {
      let parentIndex = Math.floor((currentIndex - 1) / 2)
      if (this.heap[parentIndex] >= this.heap[currentIndex]) break

      const temp = this.heap[parentIndex]
      this.heap[parentIndex] = this.heap[currentIndex]
      this.heap[currentIndex] = temp

      currentIndex = parentIndex
    }
  }

  enqueue(value) {
    this.heap.push(value)
    this.bubbleUp()
  }

  bubbleDown() {
    let currentIndex = 0
    const length = this.heap.length
    const element = this.heap[currentIndex]

    while (true) {
      let leftChildIndex = currentIndex * 2 + 1
      let rightChildIndex = currentIndex * 2 + 2
      let leftChild = null
      let rightChild = null
      let swap = null // 바꿀 index

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex]
        if (leftChild > element) {
          swap = leftChildIndex
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex]
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex
        }
      }
      if (swap === null) break
      this.heap[currentIndex] = this.heap[swap]
      this.heap[swap] = element
      currentIndex = swap
    }
  }

  dequeue() {
    if (this.heap.length === 0) return 0
    const max = this.heap[0]
    const end = this.heap.pop()
    if (this.heap.length > 0) {
      this.heap[0] = end
      this.bubbleDown()
    }

    return max
  }
}
const answer = []
const heap = new MaxHeap()

for (let x of calculate) {
  if (x > 0) {
    heap.enqueue(x)
  } else {
    answer.push(heap.dequeue())
  }
}
console.log(answer.join("\n"))
