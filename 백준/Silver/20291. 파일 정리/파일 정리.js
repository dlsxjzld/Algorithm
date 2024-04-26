const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])
const temp = new Map()

for (let i = 1; i < 1 + n; i++) {
  const extension = input[i].split(".")[1]
  if (temp.has(extension)) {
    temp.set(extension, temp.get(extension) + 1)
  } else {
    temp.set(extension, 1)
  }
}

const names = Array.from(temp.keys()).sort()
let answer = ""

names.forEach((key) => {
  answer += `${key} ${temp.get(key)}` + "\n"
})
console.log(answer)
