const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const targetChannel = input[0]
const numOfBrokenButton = Number(input[1])
const brokenButton = input[2]?.split(" ") || null

const initialChannel = 100
let answer = Math.abs(Number(targetChannel) - initialChannel)

if (initialChannel === Number(targetChannel)) {
  answer = 0
} else {
  for (let start = 0; start <= 1000000; start++) {
    let count = 0

    const stringifyStart = start.toString()

    if (brokenButton !== null) {
      for (let idx = 0; idx < numOfBrokenButton; idx++) {
        if (stringifyStart.includes(brokenButton[idx])) {
          count += 1
          break
        }
      }
      if (count === 0) {
        answer = Math.min(
          answer,
          stringifyStart.length + Math.abs(Number(targetChannel) - start),
        )
      }
    }
    if (brokenButton === null) {
      answer = Math.min(answer, targetChannel.length)
    }
  }

}

console.log(answer)
