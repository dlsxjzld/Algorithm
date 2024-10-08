const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [s, p] = input[0].split(" ").map(Number)
const dna = input[1].split("")
const [a, c, g, t] = input[2].split(" ").map(Number)
const currentChar = {
  A: 0,
  C: 0,
  G: 0,
  T: 0,
}
const check = () => {
  if (
    currentChar["A"] >= a &&
    currentChar["C"] >= c &&
    currentChar["G"] >= g &&
    currentChar["T"] >= t
  ) {
    return 1
  }
  return 0
}
let answer = 0
for (let i = 0; i < p; i++) {
  currentChar[dna[i]] += 1
}
answer += check()

for (let i = 1; i < s - p + 1; i++) {
  currentChar[dna[i - 1]] -= 1
  currentChar[dna[i + p - 1]] += 1
  answer += check()
}

console.log(answer)
