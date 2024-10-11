const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [N, r, c] = input[0].split(" ").map(Number)
let answer = 0
const solve = (n, r, c) => {
  if (n < 0) {
    return
  }
  const currentLength = 2 ** n
  if (r < currentLength && c < currentLength) {
    answer += 0
  } else if (r < currentLength && c >= currentLength) {
    answer += currentLength * currentLength * 1
    c -= currentLength
  } else if (r >= currentLength && c < currentLength) {
    answer += currentLength * currentLength * 2
    r -= currentLength
  } else {
    answer += currentLength * currentLength * 3
    r -= currentLength
    c -= currentLength
  }
  solve(n - 1, r, c)
}
solve(N - 1, r, c)
console.log(answer)