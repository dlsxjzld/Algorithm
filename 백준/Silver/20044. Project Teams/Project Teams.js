const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = +input[0]
const students = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b)

// 1 5 7 8
// 1 2 3 5 7 9

let start = 0
let end = students.length - 1
const scores = []

while (start < end) {
  const sum = students[start] + students[end]
  scores.push(sum)
  start += 1
  end -= 1
}

const minScore = Math.min(...scores)
console.log(minScore)
