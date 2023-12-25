const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])

let start = 0
let answer = 0

while (start < n) {
  answer += 1
  if (answer.toString().includes("666")) {
    start += 1
  }
  if (start === n) {
    console.log(answer)
    break
  }
}
