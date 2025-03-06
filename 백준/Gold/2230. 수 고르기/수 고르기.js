const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, m] = input[0].split(" ").map(Number)
const numbers = input.slice(1).sort((a, b) => a - b)
let start = 0
let end = 1
let answer = numbers[n - 1] - numbers[0]
if (m === 0) {
  console.log(0)
  return
}

while (start <= n - 1) {
  const diff = Math.abs(numbers[end] - numbers[start])
  if (diff >= m) {
      if(answer > diff){
        answer = diff
      }
          start += 1
  } else {
    if (end <= n - 1) {
      end += 1
    } else {
      start += 1
    }
  }
}
console.log(answer)
