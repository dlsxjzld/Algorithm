const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const T = Number(input[0])
const answer = []
for (let tc = 1; tc <= T; tc++) {
  const keyLogger = input[tc].split("")
  const left = []
  const right = []

  for (let key of keyLogger) {
    if (key === "<") {
      if (left.length > 0) {
        right.push(left.pop())
      }
    } else if (key === ">") {
      if (right.length > 0) {
        left.push(right.pop())
      }
    } else if (key === "-") {
      left.pop()
    } else {
      left.push(key)
    }
  }
  answer.push(left.join("") + right.reverse().join(""))
}

console.log(answer.join("\n"))
