const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = input[0]
const tshirt = input[1].split(' ').map(Number)
const [t,p] = input[2].split(' ').map(Number)

const answerT = tshirt.map(val=>{
    return val<=t ? val>0 ?1 :0 : Math.ceil(val/t)
}).reduce((a,b)=>a+b,0)
const answerP = Math.floor(n/p)
const answerOneP = n%p
console.log(answerT)
console.log(answerP,answerOneP)