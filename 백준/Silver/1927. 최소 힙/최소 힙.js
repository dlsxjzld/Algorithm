const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

class Heap {
  constructor() {
    this.array = []
  }

  push(value) {
    this.array.push(value)
    if (this.array.length > 0) {
      let childIndex = this.array.length - 1
      let parentIndex = Math.floor((childIndex - 1) / 2)
      while (this.array[parentIndex] > this.array[childIndex]) {
        let tmp = this.array[parentIndex]
        this.array[parentIndex] = this.array[childIndex]
        this.array[childIndex] = tmp
        childIndex = parentIndex
        parentIndex = Math.floor((childIndex - 1) / 2)
        if (childIndex == 0) {
          break
        }
      }
    }
  }

  pop() {
    if (this.array.length == 0) return null
    else if (this.array.length == 1) return this.array.pop()
    else {
      let parentIndex = 0
      const returnValue = this.array[parentIndex]
      this.array[parentIndex] = this.array.pop()
      while (parentIndex < this.array.length) {
        let swap = null
        let leftIndex = parentIndex * 2 + 1
        let rightIndex = parentIndex * 2 + 2
        if (this.array[leftIndex] != null) {
          if (this.array[leftIndex] < this.array[parentIndex]) {
            swap = leftIndex
          }
        }

        if (this.array[rightIndex] != null) {
          if (
            (swap == null &&
              this.array[rightIndex] < this.array[parentIndex]) ||
            (swap != null && this.array[swap] > this.array[rightIndex])
          ) {
            swap = rightIndex
          }
        }
        if (swap == null) {
          break
        }

        let tmp = this.array[parentIndex]
        this.array[parentIndex] = this.array[swap]
        this.array[swap] = tmp
        parentIndex = swap
      }
      return returnValue
    }
  }
  bubbleUp() {}
}

const heap = new Heap()

const nums = input.slice(1).map(Number)
const answer = []

for (let n of nums) {
  if (n == 0) {
    const target = heap.pop()

    answer.push(target == null ? 0 : target)
  } else {
    heap.push(n)
  }
}

console.log(answer.join("\n"))
