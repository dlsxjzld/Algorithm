const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")


const n = Number(input[0])
const original = input[1]
let answer = 0

const target = input.slice(2)

for(let i=0;i<n-1;i++){
  let originalCnt = original
  for(let char of original){
    if(target[i].includes(char)){
      target[i] = target[i].replace(char,'')
      originalCnt = originalCnt.replace(char,'')
    }
  }
  if(originalCnt.length<=1 && target[i].length<=1){
    answer +=1
  }
}
console.log(answer)