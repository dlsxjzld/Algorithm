const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const N = Number(input[0])

const visited = Array(N + 1).fill(false)
const answer = []

const permutation = (arr) => {
  if (arr.length === N) {
    answer.push(arr.join(" "))
    return
  }
  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      visited[i] = true
      arr.push(i)
      permutation(arr)
      visited[i] = false
      arr.pop()
    }
  }
}
permutation([])

console.log(answer.join('\n'))