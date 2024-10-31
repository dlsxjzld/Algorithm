const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])

const positions = input.slice(1).map((val) => Number(val.split(" ")[1]))

let answer = 0

let y = []

for (let i = 0; i < positions.length; i++) {
  const cur = positions[i]

  while (y.at(-1) > cur) {
    y.pop()
    answer += 1
  }

  if (cur !=0 && (y.length == 0 ||  y.at(-1) < cur)) {
    y.push(cur)
  }
}

console.log(answer+y.length)
