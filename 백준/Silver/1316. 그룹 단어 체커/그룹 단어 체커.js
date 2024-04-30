const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])
let answer = n
for (let i = 1; i < n + 1; i++) {
  const word = input[i]

  for (let j = 0; j < word.length - 1; j++) {
    if (word[j] != word[j + 1] && word.slice(j + 1).includes(word[j])) {
      answer -= 1
      break
    }
  }
}
console.log(answer)
