const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const stick = 3
const n = Number(input[0])
const answer = []

const hanoi = (from, to, thru, disc) => {
  if (disc === 1) {
    return answer.push(`${from} ${to}`)
  }

  hanoi(from, thru, to, disc - 1)
  answer.push(`${from} ${to}`)
  hanoi(thru, to, from, disc - 1)
}

console.log((BigInt(2 ** n) - 1n).toString())
if (n <= 20) {
  hanoi(1, 3, 2, n)
  console.log(answer.join("\n"))
}
