const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])
const m = Number(input[1])
const numbers = input[2]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b)

const solution = (arr, n, m) => {
  let start = 0
  let end = n - 1
  let cnt = 0

  while (start < end) {
    let ssum = arr[start] + arr[end]
    if (ssum < m) {
      start += 1
    } else {
      end -= 1
      if (ssum === m) {
        cnt += 1
      }
    }
  }
  return cnt
}

console.log(solution(numbers, n, m))
