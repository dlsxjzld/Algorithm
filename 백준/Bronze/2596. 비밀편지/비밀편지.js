// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")

// const numbers = input.slice(0).map((row) => row.split(" ").map(Number))

// const graph = Array.from({ length: 101 }, () => Array.from({ length: 101 }, () => false))
// let cnt = 0
// for (let [x1, y1, x2, y2] of numbers) {
//   for (let sx = y1; sx < y2; sx += 1) {
//     for (let sy = x1; sy < x2; sy += 1) {
//       if (graph[sx][sy]) continue
//       graph[sx][sy] = true
//       cnt += 1
//     }
//   }
// }

// console.log(cnt)

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")


const ALPHABET = {
  "000000": "A",
  "001111": "B",
  "010011": "C",
  "011100": "D",
  100110: "E",
  101001: "F",
  110101: "G",
  111010: "H",
}
const charCount = Number(input[0])
const chars = input[1]
let answer = ""
for (let i = 0; i < charCount; i += 1) {
  const target = chars.slice(i * 6, i * 6 + 6)
  const keys = Object.keys(ALPHABET)
  let flag = false
  for (let key of keys) {
    let cnt = 0
    for (let j = 0; j < 6; j++) {
      if (key[j] !== target[j]) {
        cnt += 1
      }
    }
    if (cnt <= 1) {
      answer += ALPHABET[key]
      flag = true
      break
    }
  }
  if (!flag) {
    answer = (i + 1).toString()
    break
  }
}

console.log(answer)