const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, k, q, m] = input[0].split(" ").map(Number)
const arrK = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b)
const arrQ = input[2]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b)
  .filter((val) => !arrK.includes(val))
const arrM = input.slice(3).map((row) => row.split(" ").map(Number))

const students = Array(n+3).fill(false)

arrQ.forEach((val) => {
  for (let i = 3; i <= n+2; i++) {
    if (!students[i] && i % val === 0) {
      students[i] = true
    }
  }
})

arrK.forEach((val) => {
  for (let i = 3; i <= n+2; i++) {
    if (students[val]) {
      students[val] = false
    }
  }
})

const answer = []

arrM.forEach(([s, e]) => {
  answer.push(students.slice(s, e + 1).filter((val) => val === false).length)
})

console.log(answer.join("\n"))
