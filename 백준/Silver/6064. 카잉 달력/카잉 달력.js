const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const T = Number(input[0])
const getGcd = (a, b) => {
  const r = a % b
  if (r === 0) {
    return b
  }
  return getGcd(b, r)
}

for (let i = 1; i < T + 1; i++) {
  const [m, n, x, y] = input[i].split(" ").map(Number)
  const gcd = getGcd(m, n)
  const max = (m * n) / gcd

  let sx = 0

  let answer = -1
  while (true) {
    const cnt = m * sx + x
    if (cnt > max) {
      break
    }
    const temp = cnt % n === 0 ? n : cnt % n
    if (temp === y) {
      answer = cnt
      break
    }
    sx++
  }

  console.log(answer)
}
