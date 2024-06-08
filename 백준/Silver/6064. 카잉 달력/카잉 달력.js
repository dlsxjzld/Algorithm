const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const T = Number(input[0])

const getGcd = (a, b) => {
  let newA = a
  let newB = b
  while (newB !== 0) {
    ;[newA, newB] = [newB, newA % newB]
  }
  return newA
}
const answer = []

for (let tc = 1; tc <= T; tc++) {
  const [m, n, x, y] = input[tc].split(" ").map(Number)
  const gcd = getGcd(m, n)
  const MAX = (m * n) / gcd
  let sx = 0
  let cnt = -1

  while (true) {
    const num = sx * m + x
    if (num > MAX) break
    if ((num - y) % n === 0) {
      cnt = num
      break
    }
    sx++
  }

  answer.push(cnt)
}

console.log(answer.join('\n'))