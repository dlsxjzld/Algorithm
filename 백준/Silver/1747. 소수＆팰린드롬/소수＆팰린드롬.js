const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])

const checkPrime = (num) => {
  if(num == 1) return false
  const sqrt = Math.floor(num ** 0.5)
  for (i = 2; i <= sqrt; i += 1) {
    if (num % i == 0) {
      return false
    }
  }
  return true
}
let start = n
const checkPaline = (num) => {
  const conv = num.toString()
  const mid = Math.floor(conv.length / 2)

  if (conv.length <= 2) {
    return conv[0] == conv.at(-1)
  }
  for (let i = 0; i < mid; i++) {
    if (conv[i] !== conv[conv.length - 1 - i]) {
      return false
    }
  }
  return true
}
while (true) {
  if (checkPrime(start)) {
    if (checkPaline(start)) {
      console.log(start)
      break
    }
  }
  start += 1
}
