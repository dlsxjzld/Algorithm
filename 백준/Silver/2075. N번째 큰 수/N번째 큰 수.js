const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

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

let n = -1
let end = -1
let answer = null
rl.on("line", function (line) {
  // 입력의 첫번째 줄인 행렬의 사이즈를 나타내는 값 저장
  if (n === -1) {
    n = parseInt(line)
    end = n
    return
  }
  // 기존 for문과 동일
  // minHeap에 행렬 Push 후 길이에 따라 minHeap에서 값 제거
  line.split(" ").forEach((value) => {
    minHeap.enqueue(parseInt(value))
    if (minHeap.heap.length > end) minHeap.dequeue()
  })
  // 한줄이 끝날 때마다 N 감소
  n--

  // 만약 모든 줄 다 봤으면 종료
  if (n === 0) rl.close()
}).on("close", function () {
  console.log(minHeap.dequeue())
  process.exit()
})
