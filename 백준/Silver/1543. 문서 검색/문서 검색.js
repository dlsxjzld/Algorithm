const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const document = input[0].split("")
const visited = Array.from({ length: document.length }, () => false)
const word = input[1]
let cnt = 0


for (let i = 0; i < document.length; i++) {
  if (!visited[i] && document.slice(i, i + word.length).join("") === word) {
    for (let j = 0; j < word.length; j++) {
      visited[i + j] = true
    }
    cnt += 1
  }
}

console.log(cnt)
