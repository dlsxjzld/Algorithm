const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const N = Number(input[0])

let start = 1

let str = ''

for(let i=1;i<=N;i+=1){
    str += i.toString()
}

let target = str.slice(0,N.toString().length)

for(let i=0;i<=str.length-N.toString().length;i+=1){
    target = str.slice(i,i+N.toString().length)
    if(target === N.toString()){
        console.log(i+1)
        break
    }
}