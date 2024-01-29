const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])
const numOfA = input[1].split(" ").map(Number)
const cnt = Array.from({ length: n }, () => Number.MAX_SAFE_INTEGER)
cnt[0] = 0

let startIndex = 0

for (let i = startIndex; i < n; i++) {
  for (let j = 1; j <= numOfA[i]; j++) {
      if(i+j >=n) continue
    cnt[i + j] = Math.min(cnt[i+j] , cnt[i]+1)
  }
}


const result = cnt.at(-1)


result !== Number.MAX_SAFE_INTEGER ? console.log(result) : console.log(-1)
