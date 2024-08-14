const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const N = Number(input[0])
const A = input[1].split(" ").map(Number)

const B = [...A].sort((a, b) => a-b)
const P = Array(N).fill(-1)
A.forEach((a, index) => {
    const targetIndex = B.indexOf(a)
    if (!P.includes(targetIndex)) {
      P[index] = targetIndex
    } else {
        let startIndex = targetIndex+1
       while(true){
           if(B[startIndex] === a && !P.includes(startIndex)){
               P[index] = startIndex
               break
           }
           startIndex++
           if(startIndex===N){
               break
           }
       }
    }
  
})

console.log(P.join(' '))