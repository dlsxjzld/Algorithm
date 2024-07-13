const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const left = input[0].split("")
const right = []
const m = Number(input[1])

for (let i = 2; i < 2 + m; i++) {
  const [order, letter] = input[i].split(" ")

  if (order === "L") {
    if (left.length > 0) {
      right.push(left.pop())
    }
  } else if (order === "D") {
    if (right.length > 0) {
      left.push(right.pop())
    }
  } else if (order === "B") {
    if (left.length > 0) {
      left.pop()
    }
  } else if (order === "P") {
    left.push(letter)
  }
}

console.log(left.join("") + right.reverse().join(""))
