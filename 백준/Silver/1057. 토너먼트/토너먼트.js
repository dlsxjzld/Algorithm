const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, a, b] = input[0].split(" ").map(Number)

// 1 2 3
// 1 2
// 1
// 3명이면 2번

// 1 2 3 4 5
// 1 2 3
// 1 2
// 1
// 5명이면 3번
//n이 홀수 -> 2로 나누고 올림
// n이 짝수 -> 2^x x번 경기함

// 1 2 3 4 5 6
// 1 2 3
// 1 2
// 1

// 6명이면 3번
const isEven = n % 2 === 0

let gameRound = Math.ceil(n / 2)

// 1 2 -> 0.5 1

// 3 4 -> 1.5 2

// 7 8 -> 3.5 4

// 8 9 -> 4 4.5

// 홀수면 2로 나눠서 올림
// 짝수면 2로 나눔
let nextA = a
let nextB = b
let answer = -1
for (let i = 1; i <= gameRound; i += 1) {
  if (nextA % 2 === 0) {
    nextA = nextA / 2
  } else {
    nextA = Math.ceil(nextA / 2)
  }
  if (nextB % 2 === 0) {
    nextB = nextB / 2
  } else {
    nextB = Math.ceil(nextB / 2)
  }

  if (nextA === nextB) {
    answer = i
    break
  }
    
}

console.log(answer)
