const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const target = input[0].split("")
const countOfA = target.filter((val) => val == "a").length

let answer = Number.MAX_SAFE_INTEGER
for (let idx = 0; idx < target.length; idx++) {
  let countOfB = 0
  for (let next = idx; next < idx + countOfA; next++) {
    if (target[next % target.length] == "b") {
      countOfB += 1
    }
  }
  answer = Math.min(answer, countOfB)
}

console.log(answer)