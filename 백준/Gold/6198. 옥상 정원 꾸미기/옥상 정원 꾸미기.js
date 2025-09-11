const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])
const buildings = input.slice(1).map(Number)
let answer = 0

const stack = []

for (let i = 0; i < n; i += 1) {
  while (stack.length > 0) {
    if (stack[stack.length - 1] <= buildings[i]) {
      stack.pop()
    } else {
      break
    }
  }

  answer += stack.length
  stack.push(buildings[i])
}

console.log(answer)
