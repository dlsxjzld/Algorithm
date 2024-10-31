const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])

const positions = input.slice(1).map((val) => val.split(" ").map(Number))

let answer = 0

let y = []

for (let [nx, ny] of positions) {
  if (y.length == 0 && ny != 0) {
    y.push(ny)
  } else {
    if (ny == 0) {
      while (y.length > 0) {
        y.pop()
        answer += 1
      }
    } else {
      if (y.at(-1) > ny) {
        while (true) {
          const cur = y.at(-1)
          if (cur > ny) {
            y.pop()
            answer += 1
          } else if (cur < ny || y.length == 0) {
            y.push(ny)
          } else {
            break
          }
        }
      } else if (y.at(-1) < ny) {
        y.push(ny)
      }
    }
  }
}

while (y.length > 0) {
  y.pop()
  answer += 1
}
console.log(answer)
