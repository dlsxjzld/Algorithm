const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const T = Number(input[0])
const answer = []
for (let tc = 0; tc < T; tc++) {
  const p = input[tc * 3 + 1].split("") // 1 4 7
  const n = Number(input[tc * 3 + 2])
  const arr =
    input[tc * 3 + 3].length === 2
      ? []
      : input[tc * 3 + 3]
          .slice(1, input[tc * 3 + 3].length - 1)
          .split(",")
          .map(Number)

  let start = 0
  let end = n

  let reversed = false
  for (let action of p) {
    if (action === "R") {
      reversed = !reversed
    } else {
      if (reversed) {
        // end
        end -= 1
      } else {
        start += 1
      }
    }
  }
  if (end < start) {
    answer.push("error")
  } else if (end == start) {
    answer.push("[]")
  } else {
    if (reversed) {
      answer.push("[" + arr.slice(start, end).reverse().join(",") + "]")
    } else {
      answer.push("[" + arr.slice(start, end).join(",") + "]")
    }
  }
}

console.log(answer.join("\n"))
