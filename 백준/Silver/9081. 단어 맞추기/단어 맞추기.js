const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const T = Number(input[0])

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
const answer = []

for (let tc = 1; tc < T + 1; tc++) {
  const word = input[tc].split("")
  const convertedWord = word.map((val) => alphabet.indexOf(val))

  let x = null
  let y = null
  for (let i = convertedWord.length - 1; i > 0; i--) {
    x = i - 1
    const char = convertedWord[x]
    for (let j = convertedWord.length - 1; j >= i; j--) {
      if (convertedWord[j] > char) {
        y = j
        break
      }
    }
    if (y !== null) {
      const temp = convertedWord[y]
      convertedWord[y] = char
      convertedWord[x] = temp
      break
    }
  }
  if (y !== null) {
    answer.push(
      convertedWord
        .slice(0, x+1)
        .concat(convertedWord.slice(x+1).sort((a, b) => a - b))
        .map((val) => alphabet[val])
        .join(""),
    )
  }else{
    answer.push(word.join(''))
  }
}
console.log(answer.join("\n"))
