const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

let N = Number(input[0])
const arr = new Array(1000001).fill(0);

function solution() {
  arr[2] = 1;
  arr[3] = 1;
  for (let i = 4; i <= 1000000; i++) {
    arr[i] = arr[i - 1] + 1;
    if (i % 2 === 0) {
      arr[i] = Math.min(arr[i], arr[i / 2] + 1);
    }
    if (i % 3 === 0) {
      arr[i] = Math.min(arr[i], arr[i / 3] + 1);
    }
  }
  return arr[N];
}

console.log(solution());
