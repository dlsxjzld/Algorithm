const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, k, q, m] = input[0].split(" ").map(Number)
const sleep = input[1].split(" ").map(Number)
const check = input[2]
  .split(" ")
  .map(Number)
  .filter((val) => !sleep.includes(val))
const student = Array(n + 3).fill(0)

// 3 4 5 6 7 8 9 10 11 12
// 1 1 2 3 3 3 4 5  5  6
for (let i = 3; i < n + 3; i++) {
  student[i] = student[i - 1]
  if (sleep.includes(i)) continue

  for (let can of check) {
    if (i % can === 0) {
      student[i] = student[i - 1] + 1
      break
    }
  }
}
const answer = []
for (let i = 3; i < 3 + m; i++) {
  const [s, e] = input[i].split(" ").map(Number)
  answer.push(e - s + 1 - (student[e] - student[s-1]))
}

console.log(answer.join("\n"))
