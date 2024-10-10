  const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    class MinHeap {
        constructor() {
            this.heap = [null];

        }

        Push(item) {
            let cur = this.heap.length;
            while (cur > 1) {
                let parent = Math.floor(cur / 2);
                if (item < this.heap[parent]) {
                    this.heap[cur] = this.heap[parent];
                    cur = parent;
                } else break;
            }
            this.heap[cur] = item;
        }

        remove() {
            const removeItem = this.heap[1];
            if (this.heap.length > 2) {
                this.heap[1] = this.heap[this.heap.length - 1];
                this.heap.pop();
                let cur = 1;
                let leftChild = cur * 2;
                let rightChild = cur * 2 + 1;
                while (this.heap[leftChild]) {
                    let CompareChild = leftChild;
                    if (this.heap[rightChild]) {
                        if (this.heap[leftChild] > this.heap[rightChild]) {
                            CompareChild = rightChild;
                        }
                    }
                    if (this.heap[CompareChild] < this.heap[cur]) {
                        [this.heap[CompareChild], this.heap[cur]] = [this.heap[cur], this.heap[CompareChild]];
                        cur = CompareChild;
                    }else break;
                    leftChild = cur * 2;
                    rightChild = cur * 2 + 1;
                }

            }else if (this.heap.length === 2) {
                this.heap.pop();
            } else {
                return 0;
            }
            return removeItem;
        }

        getSize() {
            return this.heap.length - 1;
        }

    }

    const minHeap = new MinHeap();

	// 다른 코드를 참조하여 작성
	// 입력 받은 줄의 수를 세기 위한 변수
    let N = -1;
    rl.on("line", function (line) {
      	// 입력의 첫번째 줄인 행렬의 사이즈를 나타내는 값 저장
        if (N === -1) {
            N = parseInt(line);
            n = N;
            return;
        }
      	// 기존 for문과 동일 
      	// minHeap에 행렬 Push 후 길이에 따라 minHeap에서 값 제거
        line.split(' ').forEach((value) => {
            minHeap.Push(parseInt(value));
            if(minHeap.getSize() > n) minHeap.remove();
        });
      	// 한줄이 끝날 때마다 N 감소
        N--;
      	// 만약 모든 줄 다 봤으면 종료
        if (N === 0) rl.close();
    }).on("close", function () {
        console.log(minHeap.remove());
        process.exit();
    });