const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

class Queue {
  constructor() {
    this.start = null;
    this.end = null;
    this.size = 0;
  }

  enqueue(val, time) {
    const node = new Node(val, time);
    if (this.start === null) {
      this.start = node;
      this.end = node;
    } else {
      this.end.next = node;
      this.end = node;
    }
    this.size++;
  }

  dequeue() {
    if (this.size === 0) throw new Error('empty');
    const deleteNode = this.start;
    this.start = deleteNode.next;
    deleteNode.next = null;
    this.size--;
    if (this.size === 0) this.end = null;

    return deleteNode;
  }
}

class Node {
  constructor(val, time) {
    this.val = val;
    this.time = time;
    this.next = null;
  }
}

const [n, k] = input[0].split(' ').map(Number);

const arr = new Array(100001).fill(Infinity);
arr[n] = 0;
const q = new Queue();
q.enqueue(n, 0);

while (q.size > 0) {
  const { val, time } = q.dequeue();

  for (let i of [-1, 1, 2]) {
    let next;
    if (i === 1) {
      next = val + 1;
    } else if (i === -1) {
      next = val - 1;
    } else {
      next = val * 2;
    }

    if (next < 0 || next > 100001) continue;
    if (arr[next] > time + 1) {
      arr[next] = time + 1;
      q.enqueue(next, time + 1);
    }
  }
}

console.log(arr[k]);
