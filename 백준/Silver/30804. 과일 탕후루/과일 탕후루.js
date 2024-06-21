const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const N = Number(input[0])
const arr = input[1].split(" ").map(Number)

let s = 0
let e = 0
let answer = 0
const fruit = Array(10).fill(0)

let cnt = 0
while (e < N) {
  fruit[arr[e]] += 1

  if (fruit[arr[e]] === 1) {
    cnt += 1
  }

  while (cnt > 2) {
    fruit[arr[s]] -= 1
    if (fruit[arr[s]] === 0) {
      cnt -= 1
    }
    s += 1
  }
  
  answer = Math.max(answer, e - s + 1)
  e += 1
}

console.log(answer)
