const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [a,b] = input[0].split(' ').map(Number)
const A = new Set(input[1].split(' ').map(Number))
const B = new Set(input[2].split(' ').map(Number))

for(let i of B){
    A.delete(i)
}
console.log(A.size)
if(A.size != 0){
    console.log([...A].sort((a,b)=>a-b).join(' '))
}
