const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])
const milks = input[1].split(" ").map(Number)


let myPosition = 0
let answer = 0

for (let i = 0; i < n; i += 1) {
  const cur = milks[i]
  if (cur === myPosition) {
    answer += 1
    myPosition = (myPosition + 1) % 3
  }

}

console.log(answer)
