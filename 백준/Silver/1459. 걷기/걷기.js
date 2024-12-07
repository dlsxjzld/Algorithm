const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [x, y, w, s] = input[0].split(" ").map(Number)
const isEvenX = x % 2
const isEvenY = y % 2
let answer = Number.MAX_SAFE_INTEGER
const def = (x + y) * w
if ((isEvenX && isEvenY) || (!isEvenX && !isEvenY)) {
  // 짝 짝 , 홀 홀
  answer = Math.min(
    answer,
    def,
    Math.max(x, y) * s,
    Math.min(x, y) * s + (Math.max(x, y) - Math.min(x, y)) * w,
  )
} else {
  answer = Math.min(
    answer,
    def,
    Math.min(x, y) * s + (Math.max(x, y) - Math.min(x, y)) * w,
    (Math.max(x, y) - 1) * s + w,
  )
}
console.log(answer)