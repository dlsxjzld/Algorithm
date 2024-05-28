const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, s] = input[0].split(" ").map(Number)
const cows = input
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b)


let start = 0

// 정렬 시키기?
// 1 2 3 5

let cnt = 0
while (start < n - 1) {
  let end = start + 1
  while (end < n && cows[start] + cows[end] <= s) {
    cnt += 1
    end += 1
  }
  start += 1
}
console.log(cnt)
