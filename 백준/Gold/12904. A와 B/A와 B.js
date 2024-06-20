const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const S = input[0]
const T = input[1].split("")

while (S.length !== T.length) {
  if (T[T.length - 1] === "A") {
    T.pop()
  } else {
    T.pop()
    T.reverse()
  }
}

if (S === T.join("")) {
  console.log(1)
} else {
  console.log(0)
}
