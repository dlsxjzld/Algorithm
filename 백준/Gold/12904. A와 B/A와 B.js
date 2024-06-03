const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

let s = input[0].split('')
let t = input[1].split('')

while(s.length != t.length){
  if(t[t.length-1] === 'A'){
    t.pop()
  }else if(t[t.length-1] === 'B'){
    t.pop()
    t.reverse()
  }
}

if(s.join('') === t.join('')){
  console.log(1)
}else{
  console.log(0)
}