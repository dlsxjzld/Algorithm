const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const N = Number(input[0])
const A = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b)

const search = (target, rest) => {
  let start = 0
  let end = rest.length - 1

  let mid = -1
  while (start < end) {
    const left = rest[start]
    const right = rest[end]

    mid = left + right

    if (mid === target) {
      return true
    } else if (mid > target) {
      end -= 1
    } else {
      // mid < target
      start += 1
    }
  }
}

let answer =0
for(let i=0;i<N;i+=1){
  const target = A[i]
  const rest = [...A.slice(0,i), ...A.slice(i+1)]
  if(search(target,rest)){
    answer +=1
  }
}
console.log(answer)