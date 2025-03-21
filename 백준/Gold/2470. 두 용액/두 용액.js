const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const N = Number(input[0])
const liquids = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b)

let left = 0
let right = N - 1
let diff = Number.MAX_SAFE_INTEGER

let answer = []

while (left < right) {
  let mid = liquids[left] + liquids[right]

  if (diff > Math.abs(mid)) {
    diff = Math.abs(mid)
    answer = [liquids[left], liquids[right]]
  } 
    
  if (mid === 0) {
    break
  }else if(mid > 0){
      right -=1
  }else{
      left +=1
  }
}

console.log(answer.join(" "))
