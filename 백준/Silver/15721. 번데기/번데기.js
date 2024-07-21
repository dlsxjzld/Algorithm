const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const A = Number(input[0])
const T = Number(input[1])
const target = Number(input[2]) === 0 ? "뻔" : "데기"

let n = 1

let target_cnt = 0
let index = -1
let flag = false

while (true) {
  if (flag) break

  const now = ["뻔", "데기", "뻔", "데기"].concat(
    Array.from({ length: n + 1 }, () => "뻔").concat(
      Array.from({ length: n + 1 }, () => "데기"),
    ),
  )
  while (now.length > 0) {
    const current = now.shift()
    index = (index + 1) % A

    if (current === target) {
      target_cnt += 1
      if (target_cnt === T) {
        flag = true
        break
      }
    }
  }
  n += 1
}

console.log(index)
