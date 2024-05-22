const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const solution = (string) => {
  let temp = ""
  if (string.length === 1) {
    return string
  }
  const newString = string.slice(0, string.length / 3)
  temp += solution(newString)
  temp += " ".repeat(string.length / 3)
  temp += solution(newString)

  return temp
}

for (let n of input) {
  const str = "-".repeat(3 ** Number(n))

  console.log(solution(str))
}
