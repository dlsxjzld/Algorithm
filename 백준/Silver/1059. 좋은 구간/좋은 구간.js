const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const l = Number(input[0])
const S = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b)
const n = Number(input[2])

if (S.includes(n)) {
  console.log(0)
} else {
  const s_min = Math.min(...S)
  const s_max = Math.max(...S)
  let start = null
  let end = null
  let cnt = 0

  if (s_min > n) {
    if(n === 1){
        console.log(s_min-n-1)
        return
    }
    
    start = 1
    end = s_min - 1
    for (let i = start; i < s_min; i++) {
      for (let j = i + 1; j < s_min; j++) {
        if (i <= n && j >= n) {
          cnt += 1
        }
      }
    }
  } else {
      
    for (let i = 0; i < l - 1; i++) {
      if (S[i] < n && S[i + 1] > n) {
        start = S[i]+1
        end = S[i + 1]
        break
      }
    }
    

    for (let i = start; i < end; i++) {
      for (let j = i + 1; j < end; j++) {
        if (i <= n && j >= n) {
          cnt += 1
        }
      }
    }
  }
  console.log(cnt)
}
