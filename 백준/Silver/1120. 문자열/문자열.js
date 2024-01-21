const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [A, B] = input[0].split(" ")
let answer = Number.MAX_SAFE_INTEGER

if (A.length === B.length) {
  let count = 0
  A.split("").forEach((val, idx) => {
    if (B[idx] !== val) {
      count += 1
    }
  })
  answer = count
} else {
  for (let i = 0; i <= B.length - A.length; i++) {
    let count = 0
    for (let j = 0; j < A.length; j++) {
      if (B[i + j] !== A[j]) {
        count += 1
      }
    }
    answer = Math.min(answer, count)
  }
}

console.log( answer)
