const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

let n = input[0].split("")
let num = 0
let index = 0
while (true) {
  num += 1
  let strNum = num.toString()

  for (let char of strNum) {
    if (n[index] === char) {
      index++
    }
  }
  if (index === n.length) {
    console.log(num)
    break
  }
}
