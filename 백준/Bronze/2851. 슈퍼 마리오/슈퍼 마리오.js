const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
let ssum = 0
let target = 100
let diff = target-ssum
let last = 0
let answer = 0
for(let data of input){
    ssum += Number(data)
    last = Number(data)
    if(Math.abs(target-ssum) <= diff){
        diff = Math.abs(target-ssum)
        answer = Math.max(answer,ssum)
    }
}

console.log(answer)