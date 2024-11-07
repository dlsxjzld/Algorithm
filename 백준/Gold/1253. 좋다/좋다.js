const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const N = Number(input[0])
const A = input[1].split(" ").map(Number)

A.sort((a, b) => a - b)

const binarySearch = (target, rest) => {
  let start = 0
  let end = rest.length-1

  while (start < end) {
    let mid = rest[start] + rest[end]

    if (target === mid) {
      return true
    } else if (target < mid) {
      end = end - 1
    } else if (target > mid) {
      start = start + 1
    }
  }
  return false
}
let num = 0
for (let i = 0; i < N; i++) {
  const target = A[i]
  const rest = [...A.slice(0, i), ...A.slice(i + 1)]

  if(binarySearch(target,rest)){
    num += 1
  }
}
console.log(num)