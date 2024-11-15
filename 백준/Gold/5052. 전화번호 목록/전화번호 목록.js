const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")

const t = Number(input[0])
let index = 1
const answer = []
for (let tc = 0; tc < t; tc++) {
  const n = Number(input[index++])
  const phoneNumbers = input.slice(index, index + n).sort()
  index += n
  let flag = true

  for (let i = 0; i < n - 1; i++) {
    if (phoneNumbers[i + 1].startsWith(phoneNumbers[i])) {
      flag = false
      break
    }
  }
  if (flag) {
    answer.push("YES")
  } else {
    answer.push("NO")
  }
}
console.log(answer.join("\n"))
