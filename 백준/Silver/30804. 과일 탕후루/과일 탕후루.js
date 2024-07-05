const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const N = Number(input[0])
const arr = input[1].split(" ").map(Number)

let left = 0
let right = 0
let cnt = Array.from({ length: 10 }, () => 0) // 과일 종류별 갯수
let kind = 0
let answer = 0

while (left <= right && right < N) {
  const curr = arr[right]

  if (kind <= 2) {
    if (cnt[curr] === 0) {
        // 과일의 갯수가 0개이면 종류가 하나 추가됨
        kind += 1
    }
    cnt[curr] += 1
    right += 1
  } 
  if(kind>=3){
    cnt[arr[left]] -= 1

    if (cnt[arr[left]] === 0) {
      kind -= 1
    }
    left += 1
  }
  
  answer = Math.max(
    answer,
    cnt.reduce((prev, curr) => prev + curr, 0),
  )
}

console.log(answer)
