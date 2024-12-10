const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])
const visited = Array.from({ length: n }, (_, i) => i + 1)

const numbers = input
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b)
let cnt = 0
for (let i = 0; i < n; i += 1) {
  cnt += Math.abs(numbers[i] - visited[i])
}

console.log(cnt)
