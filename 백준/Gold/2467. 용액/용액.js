const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const N = Number(input[0])
const numbers = input[1].split(" ").map(Number)
let start = 0
let end = N - 1
const answer = [numbers[start], numbers[end]]

let diff = Math.abs(numbers[start] + numbers[end])

while (start < end-1) {

  if (diff == 0) break
  const nextStart = Math.abs(numbers[start + 1] + numbers[end])
  const nextEnd = Math.abs(numbers[start] + numbers[end - 1])

  if (nextStart < nextEnd) {
    if (diff > nextStart) {
      answer[0] = numbers[start + 1]
      answer[1] = numbers[end]
      diff = nextStart
    }
    start += 1
  } else {
    if (diff > nextEnd) {
      diff = nextEnd
      answer[0] = numbers[start]
      answer[1] = numbers[end - 1]
    }
    end -= 1
  }

}
console.log(answer.join(" "))
