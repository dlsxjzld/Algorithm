const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])
const origin = input[1].split(" ").map(Number)
const m = Number(input[2])
const allOrigin = []
const targets = input.slice(3).map((row) => row.split(" ").map(Number))

const answer = []
// 1 -> 오른쪽
// 2 -> 위쪽
// 3 -> 왼쪽
// 4 -> 아래쪽
const moveBack = {
  1: "3",
  2: "4",
  3: "1",
  4: "2",
}
for (let i = 0; i < n; i += 1) {
  let str = ""
  let backStr = ""
  for (let j = i; j < i + n; j += 1) {
    str += origin[j % n]
    backStr += moveBack[origin[j % n]]
  }

  allOrigin.push(str)
  allOrigin.push(backStr.split('').reverse().join(''))
}

for (let target of targets) {
  for (let i = 0; i < n; i += 1) {
    let str = ""
    let backStr = ""
    for (let j = i; j < i + n; j += 1) {
      str += target[j % n]

    }

    if (allOrigin.includes(str)) {
      answer.push(target.join(" "))
      break
    }
  }
}

console.log(answer.length)
console.log(answer.join("\n"))
