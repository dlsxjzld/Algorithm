const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, l] = input[0].split(" ").map(Number)
const boxes = input[1].split(" ").map(Number)
const [start, end] = [boxes[0] - l, boxes[0] + l]
const isStable = Array(n).fill(0)
let mid = 0

for (let i = n - 1; i > 0; i--) {
  mid += boxes[i]
  isStable[i] = mid / (n - i)
}
let answer = true
for (let i = n - 1; i > 0; i--) {
  let [s, e] = [boxes[i - 1] - l, boxes[i - 1] + l]
  if (s >= isStable[i] || isStable[i] >= e) {
    answer = false
    break
  }
}

if (answer) {
  console.log("stable")
} else {
  console.log("unstable")
}
