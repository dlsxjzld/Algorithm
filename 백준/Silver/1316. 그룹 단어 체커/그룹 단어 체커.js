const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])
let answer = 0
for (let i = 1; i < n + 1; i++) {
  const word = input[i]
  const checker = new Set()
  const current_char = []
  let flag = true
  for (let char of word) {
    if (!checker.has(char)) {
      checker.add(char)
      current_char.push(char)
    } else {
      if (current_char.at(-1) != char) {
        flag = false
        break
      }
    }
  }
  if (flag) {
    answer += 1
  }
}
console.log(answer)
