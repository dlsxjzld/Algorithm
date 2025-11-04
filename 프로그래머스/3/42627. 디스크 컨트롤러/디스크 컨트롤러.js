class Heap {
  // 최소힙
  constructor(compareFn = (a, b) => a - b) {
    this.queue = [];
    this.compareFn = compareFn;
  }

  push(value) {
    this.queue.push(value);

    this.bubbleUp(this.size() - 1);
  }
  pop() {
    if (this.size() === 0) {
      return null;
    }
    if (this.size() === 1) {
      return this.queue.pop();
    }
    const root = this.queue[0];
    const last = this.queue.pop();
    this.queue[0] = last;
    if (this.size() > 1) {
      this.bubbleDown(0);
    }

    return root;
  }

  bubbleUp(index) {
    // index를 비교해서 올려야함
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      // 자식 vs 부모
      if (this.compareFn(this.queue[index], this.queue[parentIndex]) < 0) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  bubbleDown(index) {
    let swap = index;

    while (true) {
      let left = index * 2 + 1;
      let right = index * 2 + 2;

      if (this.queue[left] && this.compareFn(this.queue[left], this.queue[swap]) < 0) {
        swap = left;
      }

      if (this.queue[right] && this.compareFn(this.queue[right], this.queue[swap]) < 0) {
        swap = right;
      }

      if (swap === index) {
        break;
      }
      this.swap(swap, index);
      index = swap;
    }
  }

  swap(aIdx, bIdx) {
    [this.queue[aIdx], this.queue[bIdx]] = [this.queue[bIdx], this.queue[aIdx]];
  }

  size() {
    return this.queue.length;
  }
}


function solution(jobs) {
    const newJobs = jobs.map(([s,l],i)=>[i,s,l])
    const count = newJobs.length
    newJobs.sort((a,b)=>a[1]-b[1])
    
    const compareFn = (a,b)=> {
      return a[2]-b[2] || a[1]-b[1] || a[0]-b[0]
    }
    const minHeap = new Heap(compareFn)
    
    let time = 0
    let total = 0
    
    while(newJobs.length>0 || minHeap.size() > 0){
        while(newJobs.length > 0){
            if(newJobs[0][1] <= time){
                minHeap.push(newJobs.shift())
            }else{
                break
            }
        }
        
        if(minHeap.size() > 0){
            const [i,s,l] = minHeap.pop()
            time += l
            total += time -s
        }else if(newJobs.length > 0 && minHeap.size() === 0){
            time = newJobs[0][1]
        }
        
    }
    
    var answer = Math.floor(total/count)
    return answer;
}