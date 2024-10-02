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
  if (cur === "H") continue
  for (let j = i - k; j <= i+k; j++) {
    if (j >= 0 && j<n && !visited[j]) {
      visited[j] = true
      answer += 1
      break
    }
  }
}
console.log(answer)
