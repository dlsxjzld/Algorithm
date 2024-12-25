const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const N = input[0]

let start = 1
let index = 0

while (index < N.length) {
  const str = start.toString()

  for (let i = 0; i < str.length; i += 1) {
    if (str[i].includes(N[index])) {
      index += 1
    }
  }

  if (index >= N.length) {
    break
  }
  start += 1
}
console.log(start)

