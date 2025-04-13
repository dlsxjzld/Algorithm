const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const num = Number.parseInt(input[0], 10)
const studentClasses = []
for (let i = 0; i < num; i++) {
  studentClasses[i] = input[i + 1].split(" ").map(Number)
}

let max = 0
let leader = 0
for (let i = 0; i < num; i++) {
  const set = new Set()
  for (let j = 0; j < 5; j++) {
    for (let k = 0; k < num; k++) {
      if (studentClasses[i][j] === studentClasses[k][j] && i !== k) {
        set.add(k)
      }
    }
  }
  if (set.size > max) {
    leader = i
    max = set.size
  }
}

console.log(leader + 1)
