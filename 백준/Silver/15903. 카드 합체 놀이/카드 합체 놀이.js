const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, m] = input[0].split(" ").map(Number)

const numbers = input[1].split(" ").map(BigInt)

class MinHeap {
  constructor() {
    this.heap = []
  }

  enqueue(value) {
    this.heap.push(value)

    if (this.heap.length > 1) {
        
      this.rollUp()
      
    }
  }

  rollUp() {
    let Length = this.heap.length
    let currentIndex = Length - 1
    let parentIndex = null

    while (true) {
      parentIndex = Math.floor((currentIndex - 1) / 2)
      if (parentIndex >=0 &&  this.heap[parentIndex] > this.heap[currentIndex]) {
        const temp = this.heap[currentIndex]
        this.heap[currentIndex] = this.heap[parentIndex]
        this.heap[parentIndex] = temp
        currentIndex = parentIndex
      } else {
        break
      }
    }
  }

  dequeue() {
    if (this.heap.length === 1) return this.heap.pop()

    const returnValue = this.heap[0]
    const end = this.heap.pop()
    this.heap[0] = end
    if (this.heap.length >= 2) {
      this.rollDown()
    }
    return returnValue
  }

  rollDown() {
    let currentIndex = 0
    let current = null
    let leftIndex = null
    let rightIndex = null
    let leftChild = null
    let rightChild = null

    while (currentIndex < this.heap.length) {
      leftIndex = currentIndex * 2 + 1
      rightIndex = currentIndex * 2 + 2
      current = this.heap[currentIndex]
      let swap = null
      
      if (leftIndex < this.heap.length && this.heap[leftIndex] != undefined) {
        leftChild = this.heap[leftIndex]
        if (leftChild < current) {
          swap = leftIndex
        }
        
      }
      

      if (rightIndex < this.heap.length && this.heap[rightIndex] != undefined) {
        rightChild = this.heap[rightIndex]
          if (
            (swap === null && rightChild < current) ||
            (swap !== null && rightChild < leftChild)
          ) {
            swap = rightIndex
          }
      }

      if (swap === null) break

      const temp = this.heap[swap]
      this.heap[swap] = this.heap[currentIndex]
      this.heap[currentIndex] = temp
      currentIndex = swap
    }
  }
}

const minHeap = new MinHeap()

for (let num of numbers) {
  minHeap.enqueue(num)
}

for (let i = 0; i < m; i++) {
  const x = minHeap.dequeue()
  const y = minHeap.dequeue()
  
  const newValue = x + y
  minHeap.enqueue(newValue)
  minHeap.enqueue(newValue)
}
console.log(minHeap.heap.reduce((prev,curr)=>prev+curr,0n).toString())

