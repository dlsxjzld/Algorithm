const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const s = Number(input[0])
let ssum = 0
let start = 1
let cnt = 0

while (ssum <= s) {
  ssum += start
  start += 1
  cnt += 1
}
console.log(cnt-1)
