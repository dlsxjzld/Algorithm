const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const solution = (n) => {
  if (n === 0) {
    return "-"
  }
  const side = solution(n - 1)
  const center = " ".repeat(3 ** (n - 1))
  return side + center + side
}

for (let n of input) {
  console.log(solution(Number(n)))
}
