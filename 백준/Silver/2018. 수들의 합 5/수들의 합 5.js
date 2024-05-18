const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])

let start = 1
let end = 1
let ssum = 0
let cnt = 0

while (end <= n + 1) {
  if (ssum < n) {
    ssum += end
    end += 1
  } else if (ssum > n) {
    ssum -= start
    start += 1
  }

  if (ssum === n) {
    cnt += 1
    ssum -= start
    start += 1
  }
}
console.log(cnt)
