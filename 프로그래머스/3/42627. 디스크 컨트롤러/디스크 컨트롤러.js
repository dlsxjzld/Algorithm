class MinHeap {
  queue = [];
  constructor(compare) {
    this.compare = compare;
  }

  // pop + 힙 내리기
  pop() {
    if (!this.queue.length) {
      return null;
    }

    if (this.queue.length === 1) {
      return this.queue.pop();
    }

    const root = this.queue[0];
    const last = this.queue.pop();

    this.queue[0] = last;

    let currentIndex = 0;
    let leftIndex = currentIndex * 2 + 1;
    let rightIndex = currentIndex * 2 + 2;

    while (true) {
      const current = this.queue[currentIndex];
      const left = this.queue[leftIndex];
      const right = this.queue[rightIndex];
      let swap = null;

      if (left && !this.compare(current, left)) {
        swap = leftIndex;
      }

      if (right) {
        if ((swap && !this.compare(left, right)) || (!swap && !this.compare(current, right))) {
          swap = rightIndex;
        }
      }

      if (swap === null) {
        break;
      }

      this.queue[currentIndex] = this.queue[swap];
      this.queue[swap] = current;
      currentIndex = swap;
      leftIndex = currentIndex * 2 + 1;
      rightIndex = currentIndex * 2 + 2;
    }

    return root;
  }
  push(val) {
    this.queue.push(val);
    if (this.queue.length === 1) {
      return;
    }
    let currentIndex = this.queue.length - 1;
    let parentIndex = Math.floor((currentIndex - 1) / 2);

    while (currentIndex) {
      const parent = this.queue[parentIndex];
      const current = this.queue[currentIndex];

      if (!this.compare(parent, current)) {
        this.queue[parentIndex] = current;
        this.queue[currentIndex] = parent;
        currentIndex = parentIndex;
        parentIndex = Math.floor((currentIndex - 1) / 2);

        if (currentIndex === 0) {
          break;
        }
      } else {
        break;
      }
    }
  }
    
  size(){
      return this.queue.length
  }

  // 힙 내리기
}

function solution(jobs) {
    var answer = 0;
    const count = jobs.length
    
    // 작업의 소요시간이 짧은 것, 
    // 작업의 요청 시각이 빠른 것, 
    // 작업의 번호가 작은 것
    
    const compareFn = (cur,next)=>{
        return cur[1] < next[1]
    }
    const minHeap = new MinHeap(compareFn)
    
    jobs.sort((a,b) => a[0]-b[0]);
  
  let time = 0;
  let complete = 0;
  let total = 0;
  
  while(jobs.length || minHeap.size()) {
    while(jobs.length) {
      if(jobs[0][0] === time) {
        minHeap.push(jobs.shift());
      } else break;
    }
      

    if(minHeap.size() && time >= complete) {
      const task = minHeap.pop();

      complete = task[1] + time;
      total += complete - task[0];
    }
    time++;
  }

  return Math.floor(total / count)

}