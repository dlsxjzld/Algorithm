const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])
const numbers = input[1].split(" ").map(Number)
const m = Number(input[2])
const blocks = input.slice(3).map((row) => row.split(" ").map(Number))

const add = Array(n + 1).fill(0)
for (let i = 0; i < n; i++) {
  add[i + 1] += add[i] + numbers[i]
}
const answer = []


for(let [s,e] of blocks){
    answer.push(add[e]-add[s-1])
}

console.log(answer.join('\n'))