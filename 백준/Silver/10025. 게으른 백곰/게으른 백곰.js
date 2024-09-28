const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

let [n, k] = input[0].split(" ").map(Number)
const ices = Array.from({ length: 1_000_001 }, () => 0)
input
  .slice(1)
  .map((row) => row.split(" ").map(Number))
  .forEach(([ice, index]) => (ices[index] = ice))

const max = 1_000_000
 k = k >=5_00_001 ?5_00_000 : k
let current = ices
  .slice(0)
  .filter((_,position) => position < k*2+1)
  .reduce((a, b) => a + b)
let answer = current



for (let i = 1; i <= max - (k*2+1)+1; i++) {
  current = current - ices[i - 1] + ices[i + k*2]


  answer = Math.max(answer, current)
}

console.log(answer)
