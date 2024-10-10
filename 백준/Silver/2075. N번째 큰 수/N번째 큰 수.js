// N×N의 표에 수 N2개 채워져 있다.
// 채워진 수에는 한 가지 특징이 있는데, 모든 수는 자신의 한 칸 위에 있는 수보다 크다는 것이다.

const readLine = require("readline")
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
})
class MinHeap {
  constructor() {
    this.array = []
  }
  push(value) {
    this.array.push(value)

    if (this.array.length >= 2) {
      let currentIndex = this.array.length - 1
      let parentIndex = Math.floor((currentIndex-1) / 2)
      while (parentIndex >= 0) {
        if (this.array[parentIndex] > this.array[currentIndex]) {
          let tmp = this.array[parentIndex]
          this.array[parentIndex] = this.array[currentIndex]
          this.array[currentIndex] = tmp
          currentIndex = parentIndex
          parentIndex = Math.floor((currentIndex-1) / 2)
        } else {
          break
        }
      }
    }
  }
  pop() {
    if (this.array.length == 0) return null
    if (this.array.length == 1) return this.array.pop()
    const returnValue = this.array[0]
    const endValue = this.array.pop()
    this.array[0] = endValue
    let currentIndex = 0
    while (currentIndex <= this.array.length - 1) {
      let leftIndex = currentIndex * 2 + 1
      let rightIndex = currentIndex * 2 + 2
      let swap = null

      if (this.array.length - 1 >= leftIndex) {
        if (this.array[leftIndex] < this.array[currentIndex]) {
          swap = leftIndex
        }
      }
      if (this.array.length - 1 >= rightIndex) {
        if (
          (swap !== null && this.array[leftIndex] > this.array[rightIndex]) ||
          (swap == null && this.array[rightIndex] < this.array[currentIndex])
        ) {
          swap = rightIndex
        }
      }

      if (swap == null) {
        break
      }
      let tmp = this.array[currentIndex]
      this.array[currentIndex] = this.array[swap]
      this.array[swap] = tmp
      currentIndex = swap
    }
    return returnValue
  }
  getSize() {
    return this.array.length
  }
}
const minHeap = new MinHeap()

let index = -1
let n = 0
rl.on("line", function (line) {
  if (index == -1) {
    n = Number(line)
    index = n
    return
  }
  line.split(' ').forEach((value) => {
    minHeap.push(parseInt(value));
    if(minHeap.getSize() > n) minHeap.pop();
});

  index--
  if (index == 0) {
    rl.close()
  }
}).on("close", function () {
  console.log(minHeap.pop())
  process.exit()
})

