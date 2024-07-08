const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, q] = input[0].split(" ").map(Number)
const A = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b)

const questions = input.slice(2).map((row) => row.split(" ").map(Number))
const B = Array(n + 1).fill(0)
B[1] = A[0]
for (let i = 2; i <= n; i++) {
  B[i] = B[i - 1] + A[i - 1]
}
const answer = []
for (let [s, e] of questions) {
  answer.push(B[e] - B[s - 1])
}

console.log(answer.join("\n"))
// 2 5 1 4 3
// 2 7 8 12 15

// 1 5: 1~5 번까지 다 더한 값
// 2 4: 2~4

// 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5
