const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, k, q, m] = input[0].split(" ").map(Number)

const sleeps = input[1].split(" ").map(Number)
const students = input[2]
  .split(" ")
  .map(Number)
  .filter((val) => !sleeps.includes(val))
const arrM = input.slice(3).map((row) => row.split(" ").map(Number))

const prev = Array.from({ length: n + 3 }, () => 0)

for (let i = 3; i <= n + 2; i++) {
  prev[i] = prev[i - 1]

  if (sleeps.includes(i)) continue

  for (let val of students) {
    if (i % val === 0) {
      prev[i] = prev[i - 1] + 1
    }
  }
}

const answer = []
arrM.forEach(([s, e]) => {
  answer.push(e - s + 1 - (prev[e] - prev[s-1]))
})
console.log(answer.join('\n'))