const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])
const balls = input[1].split("")
let lR = -1
let lB = -1
let rR = -1
let rB = -1

const findRightSide = (target) => {
  for (let i = n - 1; i >= 0; i--) {
    if (balls[i] == target) {
      return i
    }
  }
}
const findLeftSide = (target) => {
  for (let i = 0; i < n; i++) {
    if (balls[i] == target) {
      return i
    }
  }
}
lR = findLeftSide("R")
lB = findLeftSide("B")
rR = findRightSide("R")
rB = findRightSide("B")

let cntLR = 0
for (let i = n - 1; i >= lR; i--) {
  if (balls[i] == "B") {
    cntLR += 1
  }
}
let cntLB = 0
for (let i = n - 1; i >= lB; i--) {
  if (balls[i] == "R") {
    cntLB += 1
  }
}
let cntRR = 0
for (let i = 0; i <= rR; i++) {
  if (balls[i] == "B") {
    cntRR += 1
  }
}
let cntRB = 0
for (let i = 0; i <= rB; i++) {
  if (balls[i] == "R") {
    cntRB += 1
  }
}


console.log(Math.min(cntLB, cntLR, cntRB, cntRR))
