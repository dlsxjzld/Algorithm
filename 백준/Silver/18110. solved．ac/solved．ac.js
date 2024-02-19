const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])
if (n <= 0) {
  console.log(n)
} else {
  const cut = Math.round(n * 0.15)
  const difficulty = input
    .slice(1, 1 + n)
    .map(Number)
    .sort((a, b) => a - b)
    .slice(cut, n - cut)

  const sumOfDiff = difficulty.reduce((prev, cur) => prev + cur, 0)

  console.log(Math.round(sumOfDiff / difficulty.length))
}
