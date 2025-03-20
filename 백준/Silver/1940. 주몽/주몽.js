const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const N = Number(input[0])
const M = Number(input[1])
const numbers = input[2]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b)

let left = 0
let right = N - 1
let answer = 0

let cur = numbers[left] + numbers[right]
while (left < right) {
  if (cur === M) {
    answer += 1
  }

  if (cur < M) {
    left += 1
  } else {
    right -= 1
  }
    cur = numbers[left] + numbers[right]
}
console.log(answer)
