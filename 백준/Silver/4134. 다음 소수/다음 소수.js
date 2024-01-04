const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const tc = Number(input[0])

function prime(num) {
  if (num <= 1) {
    return false
  }
  for (let i = 2; i < Math.floor(Math.sqrt(num)) + 1; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

for (let t = 1; t < tc + 1; t++) {
  const number = Number(input[t])
  let check = number
  while (prime(check) === false) {
    check++
  }
  console.log(check)
}
