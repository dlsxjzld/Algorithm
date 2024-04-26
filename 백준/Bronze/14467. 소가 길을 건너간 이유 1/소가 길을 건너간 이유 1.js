const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])
let cows = {}
let cnt = 0

for (let i = 1; i <= 10; i++) {
  cows[i] = null
}

for (let i = 1; i < n + 1; i++) {
  const [cow, position] = input[i].split(" ").map(Number)
  if (cows[cow] == null) {
    cows[cow] = position
  } else if (cows[cow] != null && cows[cow] != position) {
    cows[cow] = position
    cnt += 1
  }
}
console.log(cnt)
