const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")

const n = Number(input[0])
let answer =0

let nicknames = new Set()

for(let str of input.slice(1)){
  if(str === 'ENTER'){
    answer += nicknames.size
    nicknames.clear()
  }else{
    nicknames.add(str)
  }
}
answer += nicknames.size
console.log(answer)