const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")

const answer = []

const check = (depth, word, isAlreadyIn) => {
  let start = ""
  isAlreadyIn.push(start)
  const set = new Set()

  for (let i = 0; i < word.length - depth - 1; i++) {
    start = word[i] + word[i + depth + 1]
    if (set.has(start)) {
      return false
    }
    set.add(start)
  }
  return true
}

let index = 0
while (true) {
  const word = input[index++]
  if (word === "*") break

  const N = word.length
  let flag = true
  for (let i = 0; i <= N - 2; i++) {
    if (!check(i, word, [])) {
      flag = false
      break
    }
  }

  if (flag === false) {
    answer.push(`${word} is NOT surprising.`)
  } else {
    answer.push(`${word} is surprising.`)
  }
}
console.log(answer.join("\n"))
