const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const N = Number(input[0])
const hills = input.slice(1).map(Number)

let answer = Number.MAX_SAFE_INTEGER
for (let height = 1; height <= 83; height++) {
  let cost = 0
  let min_height = height
  let max_height = height+17
  for (let hill of hills) {
    if(hill >= min_height && hill <= max_height){
        continue
    }
    else if(hill < min_height){
        cost += (min_height - hill) ** 2
    }
    else if(hill > max_height){
        cost += (hill - max_height) ** 2
    }
    
  }
  answer = Math.min(answer,cost)
  
}

console.log(answer)
