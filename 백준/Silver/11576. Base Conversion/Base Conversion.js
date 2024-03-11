const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [a, b] = input[0].split(" ").map(Number)
const l = Number(input[1])
const nums = input[2].split(" ").map(Number)
let tenNum = 0
const answer = []

for (let [idx, num] of nums.entries()) {
  tenNum += a ** (l - idx - 1) * num
}


while(true){
  answer.push(tenNum %b)
  tenNum = Math.floor(tenNum / b)
  if(tenNum < b){
    answer.push(tenNum)
    break
  }
}

console.log(answer.reverse().join(' '))
