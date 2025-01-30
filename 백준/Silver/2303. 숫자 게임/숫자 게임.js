const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const N = +input[0]
const numbers = input.slice(1).map((row) => row.split(" ").map(Number))

let MAX = Number.MIN_SAFE_INTEGER

const scores = numbers.map((number) => {
  let myScores = []
  for (let i = 0; i < 5; i += 1) {
    let score = number[i]
    for (let j = i + 1; j < 5; j += 1) {
      score += number[j]
      for (let k = j + 1; k < 5; k += 1) {
        score += number[k]
        const splits = score.toString().split("")
        const myRealScore = +splits[splits.length - 1]
        myScores.push(myRealScore)
        MAX = Math.max(MAX, myRealScore)
        score -= number[k]
      }
      score -= number[j]
    }
  }
  return Math.max(...myScores)
})

console.log(scores.lastIndexOf(MAX) + 1)
