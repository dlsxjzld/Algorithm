const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, k] = input[0].split(" ").map(Number)
const data = input[1].split("")

const visited = data.map((val) => (val === "P" ? true : false))
let answer = 0
for (let i = 0; i < n; i++) {
  const cur = data[i]
  let flag = false
  if (cur === "H") continue

  // left
  for (let j = i - k; j < i; j++) {
    if (j >= 0 && !visited[j]) {
      visited[j] = true
      answer += 1
      flag = true
      break
    }
  }
  if (flag) continue

  // right
  for (let j = i + 1; j <= i + k; j++) {
    if (j < n && !visited[j]) {
      visited[j] = true
      answer += 1
      flag = true
      break
    }
  }
}
console.log(answer)
