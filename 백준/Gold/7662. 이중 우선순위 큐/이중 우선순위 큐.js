const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const T = Number(input[0]);
  const answer = [];
  let index = 1;

  class Heap {
    constructor(compareFunction) {
      this.compareFunction = compareFunction;
      this.heap = [];
    }

    push(value) {
      this.heap.push(value);
      if (this.heap.length >= 2) {
        let currentIndex = this.heap.length - 1;
        let parentIndex = Math.floor((currentIndex - 1) / 2);

        while (parentIndex >= 0) {
          parentIndex = Math.floor((currentIndex - 1) / 2);
          if (this.compareFunction(this.heap[currentIndex], this.heap[parentIndex])) {
            [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
            currentIndex = parentIndex;
          } else {
            break;
          }
        }
      }
    }

    pop() {
      if (this.heap.length === 0) return;
      if (this.heap.length === 1) return this.heap.pop();

      const returnValue = this.heap[0];
      const targetValue = this.heap.pop();
      this.heap[0] = targetValue;

      if (this.heap.length >= 2) {
        let parentIndex = 0;
        while (true) {
          const leftIndex = parentIndex * 2 + 1;
          const rightIndex = parentIndex * 2 + 2;
          let swap = null;

          if (leftIndex < this.heap.length && this.compareFunction(this.heap[leftIndex], this.heap[parentIndex])) {
            swap = leftIndex;
          }
          if (rightIndex < this.heap.length) {
            if (
              (swap === null && this.compareFunction(this.heap[rightIndex], this.heap[parentIndex])) ||
              (swap !== null && this.compareFunction(this.heap[rightIndex], this.heap[leftIndex]))
            ) {
              swap = rightIndex;
            }
          }
          if (swap === null) break;
          [this.heap[swap], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[swap]];
          parentIndex = swap;
        }
      }
      return returnValue;
    }

    getLength() {
      return this.heap.length;
    }
  }

  for (let tc = 1; tc <= T; tc++) {
    const k = Number(input[index++]);
    const numbers = {};
    const minHeap = new Heap((a, b) => a <= b);
    const maxHeap = new Heap((a, b) => a >= b);

    for (let i = 0; i < k; i++) {
      const [action, num] = input[index++].split(" ");
      const convertedNum = Number(num);
      if (action === "I") {
        minHeap.push(convertedNum);
        maxHeap.push(convertedNum);
        numbers[convertedNum] = (numbers[convertedNum] || 0) + 1;
      } else if (action === "D") {
        if (convertedNum === -1) {
          while (minHeap.getLength()) {
            const minPop = minHeap.pop();
            if (numbers[minPop] > 0) {
              numbers[minPop] -= 1;
              break;
            }
          }
        } else if (convertedNum === 1) {
          while (maxHeap.getLength()) {
            const maxPop = maxHeap.pop();
            if (numbers[maxPop] > 0) {
              numbers[maxPop] -= 1;
              break;
            }
          }
        }
      }
    }

    while (maxHeap.getLength() > 0 && numbers[maxHeap.heap[0]] === 0) {
      maxHeap.pop();
    }
    while (minHeap.getLength() > 0 && numbers[minHeap.heap[0]] === 0) {
      minHeap.pop();
    }

    if (minHeap.getLength() === 0 && maxHeap.getLength() === 0) {
      answer.push("EMPTY");
    } else {
      answer.push(`${maxHeap.pop()} ${minHeap.pop()}`);
    }
  }

  console.log(answer.join("\n"));
});
