const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const T = Number(input[0])

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

const answer = []

for (let tc = 1; tc < T + 1; tc++) {
  const word = input[tc].split("").map((val) => alphabet.indexOf(val))
  let x = null
  let y = null
  for (let i = word.length - 1; i >= 0; i--) {
    x = i
    for (let j = word.length - 1; j >= i; j--) {
      if (word[i] < word[j]) {
        y = j
        break
      }
    }
    if (y !== null) {
    ;[word[x],word[y]] = [word[y],word[x]]
      answer.push(
        word
          .slice(0, x + 1)
          .concat(word.slice(x + 1).sort((a, b) => a - b))
          .map((val) => alphabet[val])
          .join(""),
      )
      break
    }
  }
  if (y === null) {
    answer.push(word.map((val) => alphabet[val]).join(""))
  }
}
console.log(answer.join("\n"))
