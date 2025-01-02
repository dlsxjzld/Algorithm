const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
const target = input[0]
// 정확히 하나의 괄호를 지워 올바른 괄호열을 만들 수 있는 경우의 수를 출력하자.
let sum = 0
let left = 0
let right = 0

for (let i = 0; i < target.length; i += 1) {
  if (target[i] === "(") {
    left += 1
    sum += 1
  } else if (target[i] === ")") {
    right += 1
    sum -= 1
  }

  if (sum < 0) {
    console.log(right)
    return
  }
  if (sum === 0) {
    left = 0
  }
}
console.log(left)