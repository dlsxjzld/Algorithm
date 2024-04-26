const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])
const answer = new Map()

for (let i = 1; i < 1 + n; i++) {
  const 확장자 = input[i].split(".")[1]
  answer.set(확장자, answer.get(확장자) + 1 || 1)
}


console.log(Array.from(answer)
  .sort().map(row => row.join(' ')).join('\n'))
