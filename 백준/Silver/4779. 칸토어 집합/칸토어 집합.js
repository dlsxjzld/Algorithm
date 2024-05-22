const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const solution = (string, result) => {
  if (string.length === 1) {
    return result.push(string)
  }
  const newString = string.slice(0, string.length / 3)
  solution(newString, result)
  result.push(" ".repeat(string.length / 3))
  solution(newString, result)
}

for (let n of input) {
  const str = "-".repeat(3 ** n)
  const answer = []

  solution(str, answer)
  console.log(answer.join(""))
}
