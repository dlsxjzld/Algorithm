const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])

const row = 5
const col = 3

const first = ("@".repeat(row * n) + "\n").repeat(n)
const second = ("@".repeat(n) + "\n").repeat(col * n)

console.log(first+second+first)