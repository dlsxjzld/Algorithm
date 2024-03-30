const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, m] = input[0].split(" ").map(Number)
const A = input[1].split(" ").map(Number)

let start = 0
let end = 0
let cnt = 0
let ssum = A[start]

while (end < n) {
  if (ssum < m) {
    end += 1
    ssum += A[end]
  } else if (ssum > m) {
    ssum -= A[start]
    start += 1
  } else {
    end += 1
    ssum += A[end]
    cnt += 1
  }
}

console.log(cnt)
