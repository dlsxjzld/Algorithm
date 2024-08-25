const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])

let minX = Number.MAX_SAFE_INTEGER
let minY = Number.MAX_SAFE_INTEGER
let maxX = Number.MIN_SAFE_INTEGER
let maxY = Number.MIN_SAFE_INTEGER

for (let i = 1; i <= n; i++) {
  const [x, y] = input[i].split(" ").map(Number)

  minX = Math.min(minX, x)
  minY = Math.min(minY, y)
  maxX = Math.max(maxX, x)
  maxY = Math.max(maxY, y)
}

console.log((maxX - minX) * (maxY - minY))
