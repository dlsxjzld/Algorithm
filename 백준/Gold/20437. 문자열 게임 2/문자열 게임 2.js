const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const T = Number(input[0])
const answer = []

for (let tc = 0; tc < T; tc++) {
  const W = input[tc * 2 + 1]
  const K = Number(input[tc * 2 + 2])
  const alpha = {}
  let min = Infinity
  let max = -Infinity

  for(let i =0;i<W.length;i++){
    const char = W[i]
    if(!alpha[char]){
      alpha[char] = []
    }
    alpha[char].push(i)
  }

  const greaterThanK = Object.entries(alpha).filter(([key,value])=>value.length>=K)

  for(const [key,value] of greaterThanK){
    
    for(let i=0;i<=value.length-K;i++){
      min = Math.min(min, value[i+K-1] - value[i]+1)
      max = Math.max(max, value[i+K-1] - value[i]+1)
    }
  }
  if(min == Infinity) answer.push('-1')
    else answer.push(`${min} ${max}`)
}
console.log(answer.join('\n'))
