const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const answer = []
input[0].split('').map((val)=>{
    if(val.toUpperCase() === val){
        answer.push(val.toLowerCase())
    }
    else if(val.toLowerCase() === val){
        answer.push(val.toUpperCase())
    }
    
})

console.log(answer.join(''))