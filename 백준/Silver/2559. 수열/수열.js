const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [N,K] = input[0].split(' ').map(Number)
const temperature = input[1].split(' ').map(Number)

let answer = temperature.slice(0,K).reduce((a,b)=>a+b,0)
let test = answer
for(let i=K;i<N;i++){
  test = test - temperature[i-K] + temperature[i]
  answer = Math.max(answer,test)
}

console.log(answer)









