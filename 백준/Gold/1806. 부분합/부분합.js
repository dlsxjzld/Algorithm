const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, s] = input[0].split(" ").map(Number)
const numbers = input[1].split(" ").map(Number)

let start = 0
let end = 0
let num_sum = numbers[start]
let min_length = Infinity

if (num_sum >= s) {
  min_length = 1
} else {
  while (start <= end && end < n) {
    // 값이 s보다 작으면 end+1 하고 더해야함
    if (num_sum < s) {
      end += 1
      num_sum += numbers[end]
    }
    if (num_sum >= s) {
      min_length = Math.min(min_length, end - start + 1)
      num_sum -= numbers[start]
      start += 1
    }
  }
}

console.log(min_length === Infinity ? 0 : min_length)
