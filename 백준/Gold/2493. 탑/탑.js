const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const N = Number(input[0])
const heights = input[1].split(" ").map(Number)
const answer = new Array(N).fill(0)
const stack = []


for(let i = N-1;i>=0;i--){
  // stack과 heights 비교
  while(stack.length>0 && heights[stack[stack.length-1]] <= heights[i]){
    const targetIndex = stack.pop()
    answer[targetIndex] = i+1
  }

  stack.push(i) // index 추가
}

console.log(answer.join(' '))