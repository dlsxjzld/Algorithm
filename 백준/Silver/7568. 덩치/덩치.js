const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const N = Number(input[0])

const people = input.slice(1).map((row) => row.split(" ").map(Number))
const answer = []
for (let i = 0; i < N; i += 1) {
  const [ta, tb] = people[i]
  let count = 0
  for (let j = 0; j < N; j += 1) {
    if (i === j) continue
    const [oa, ob] = people[j]
    if (ta < oa && tb < ob) {
      count += 1
    }
  }
  answer.push(count+1)
}
console.log(answer.join(' '))
