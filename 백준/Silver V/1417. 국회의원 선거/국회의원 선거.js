const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])
let dasom = Number(input[1])
const candidates = input.slice(2, 1 + n).map(Number)
let answer = 0

if (candidates.length !== 0) {
  while (true) {

    let max = Math.max(...candidates)
    const idx = candidates.indexOf(max)
    if(dasom > max){
      break
    }

    
    if(dasom <= max){
      dasom +=1
      max -=1
      candidates[idx] = max
      answer +=1
    }
  }
}
console.log(answer)
