const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
const n = Number(input[0])

const memory = input[1].split(" ").map(Number).reverse()

let answer = []
for (let i = 0; i < n; i++) {
  const x = n - i
  if (x === n) {
    answer.push( x.toString())
  } else {
    if (memory[i] > 0) {
      const before = answer.slice(0, memory[i]) 
      const after = answer.slice(memory[i])
      answer = [...before, x.toString() ,...after]
    } else {
      answer.unshift(x.toString())
    }
  }
}
console.log(answer.join(' '))
