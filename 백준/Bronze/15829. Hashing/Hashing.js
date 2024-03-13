const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const N = Number(input[0])
const letter = input[1]

let hash = 0;
let r = 1;
for (let i = 0; i < N; i++) {
  hash += (letter.charCodeAt(i) - 96) * r
  hash %= 1234567891;
  r *= 31
  r %= 1234567891;
}

console.log(hash)
