const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Array.from({ length: Number(input[0]) }, (_, idx) => idx + 1)
const answer = []

while(n.length>0){
  const drop = n.shift()
  answer.push(drop)
if(n.length === 0){
    break
}
  const next = n.shift()
  n.push(next)
}

console.log(answer.join(' '))